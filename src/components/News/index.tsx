import {Avatar, Card, Col, Row, Select, Typography} from 'antd'
import moment from 'moment'
import React, {useState} from 'react'
import {useGetCryptosQuery} from '../../services/cryptoApi'
import {useGetCryptoNewsQuery} from '../../services/cryptoNewsApi'

const {Option} = Select
const {Title, Text} = Typography
const demoImage =
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7OpwmY4HHRis_nsfboB4i8nLVOUmbXGDNyw&usqp=CAU'

function News() {
	const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
	const {data} = useGetCryptosQuery(20)

	const {data: cryptoNews} = useGetCryptoNewsQuery({
		newsCategory,
		count: 10,
	})

	console.log('cryptoNews: ', cryptoNews)
	if (!cryptoNews?.value) return <h2>Loading</h2>
	return (
		<Row gutter={[24, 24]} className='news-container'>
			<Col span={24}>
				<Select
					showSearch
					className='select-news'
					placeholder='Select a Crypto'
					optionFilterProp='children'
					onChange={value => setNewsCategory(value)}
					filterOption={(input, option) =>
						option!
							.children!.toString()
							.toLowerCase()
							.indexOf(input.toLowerCase()) >= 0
					}>
					<Option value='Cryptocurrency'>Cryptocurrency</Option>
					{data?.data?.coins.map(coin => (
						<Option key={coin.uuid} value={coin.name}>
							{coin.name}
						</Option>
					))}
				</Select>
			</Col>
			{cryptoNews.value.map((news, i) => (
				<Col xs={24} sm={12} lg={8} key={i}>
					<Card hoverable className='news-card'>
						<a href={news.url} target='_blank' rel='noreferrer'>
							<div className='news-image-container'>
								<Title className='news-titel' level={4}>
									{news.name}
								</Title>
								<img
									src={news?.image?.thumbnail?.contentUrl || demoImage}
									alt={news.name}
								/>
								<p>
									{news.description.length > 100
										? `${news.description.substring(0, 95)}...`
										: news.description}
								</p>
							</div>
							<div className='provider-container'>
								<div>
									<Avatar
										src={
											news.provider[0]?.image?.thumbnail?.contentUrl ||
											demoImage
										}></Avatar>
									<Text className='provider-name'>
										{news.provider[0]?.name}
									</Text>
								</div>
								<Text>{moment(news.datePublished).startOf('s').fromNow()}</Text>
							</div>
						</a>
					</Card>
				</Col>
			))}
		</Row>
	)
}

export default News
