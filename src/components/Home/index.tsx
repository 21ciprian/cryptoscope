import {Col, Row, Statistic, Typography} from 'antd'
import millify from 'millify'
import React from 'react'
import {useGetCryptosQuery} from '../../services/cryptoApi'
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
		</>
	)
}

export default Home
