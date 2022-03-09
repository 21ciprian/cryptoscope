import {Col, Row, Statistic, Typography} from 'antd'
import React from 'react'
const {Title} = Typography

function Home() {
	return (
		<>
			<Title level={2} className='title__heading'>
				Crypto Stats
			</Title>
			<Row>
				<Col span={12}>
					<Statistic title='Total CryptoCurrencies' value='5' />
				</Col>
				<Col span={12}>
					<Statistic title='Total Exchanges' value='5' />
				</Col>
				<Col span={12}>
					<Statistic title='Total Market Cap' value='5' />
				</Col>
				<Col span={12}>
					<Statistic title='Total 24h Volume' value='5' />
				</Col>
				<Col span={12}>
					<Statistic title='Total Markets' value='5' />
				</Col>
				<Col span={12}></Col>
			</Row>
		</>
	)
}

export default Home
