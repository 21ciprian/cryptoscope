import {Col, Row, Statistic, Typography} from 'antd'
import millify from 'millify'
import React from 'react'
import {Link} from 'react-router-dom'
import {useGetCryptosQuery} from '../../services/cryptoApi'
import Cryptocurrencies from '../Cryptocurrencies'
import News from '../News'
const {Title} = Typography

function Home() {
	const {data, isFetching} = useGetCryptosQuery()
	console.log('data:', data)
	const globalStats = data?.data?.stats
	if (isFetching) return <h2>'...Loading'</h2>

	return (
		<>
			<Title level={2} className='title__heading'>
				Crypto Stats
			</Title>
			<Row>
				<Col span={12}>
					<Statistic
						title='Total CryptoCurrencies'
						value={millify(globalStats.total)}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title='Total Exchanges'
						value={millify(globalStats.totalExchanges)}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title='Total Market Cap'
						value={millify(globalStats.totalMarketCap)}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title='Total 24h Volume'
						value={millify(globalStats.total24hVolume)}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title='Total Markets'
						value={millify(globalStats.totalMarkets)}
					/>
				</Col>
				<Col span={12}></Col>
			</Row>
			<section className='home__heading-container'>
				<Title level={2} className='home__title'>
					Top 10 Cryptocurrencies in the world
				</Title>
				<Title level={3} className='show-more'>
					<Link to='/crypto'>Show More</Link>
				</Title>
			</section>
			<Cryptocurrencies />
			<section className='home__heading-container'>
				<Title level={2} className='home__title'>
					Latest Crypto News
				</Title>
				<Title level={3} className='show-more'>
					<Link to='/crypto'>Show More</Link>
				</Title>
			</section>
			<News />
		</>
	)
}

export default Home
