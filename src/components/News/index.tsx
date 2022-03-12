import {Card, Col, Row, Typography} from 'antd'
import React from 'react'
import {useGetCryptoNewsQuery} from '../../services/cryptoNewsApi'
const {Title} = Typography
const demoImage =
	'http://coinrevolution.com/wp-comtent/uploads/2020/06/cryptonews.jpg'

function News() {
	const {data: cryptoNews} = useGetCryptoNewsQuery({
		newsCategory: 'Cryptocurrency',
		count: 10,
	})
	console.log('cryptoNews: ', cryptoNews)
	if (!cryptoNews?.value) return <h2>Loading</h2>
	return (
		<Row gutter={[24, 24]}>
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
						</a>
					</Card>
				</Col>
			))}
		</Row>
	)
}

export default News
