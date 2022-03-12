import {Card, Col, Row, Typography} from 'antd'
import React from 'react'
import {useGetCryptoNewsQuery} from '../../services/cryptoNewsApi'
const {Title} = Typography
type Props = {
	data: {
		_type: string
		name: string
	}
}

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
							</div>
						</a>
					</Card>
				</Col>
			))}
		</Row>
	)
}

export default News
