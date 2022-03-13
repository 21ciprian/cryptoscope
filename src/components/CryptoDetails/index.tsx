import {
	CheckOutlined,
	DollarCircleOutlined,
	ExclamationCircleOutlined,
	FundOutlined,
	MoneyCollectOutlined,
	NumberOutlined,
	StopOutlined,
	ThunderboltOutlined,
	TrophyOutlined,
} from '@ant-design/icons'
import {Col, Row, Select, Typography} from 'antd'
import HTMLReactParser from 'html-react-parser'
import millify from 'millify'
import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import {useGetCryptoDetailsQuery} from '../../services/cryptoApi'
import {Coin} from '../Cryptocurrencies'

const {Title, Text} = Typography
const {Option} = Select

function CryptoDetails() {
	const {coinId} = useParams()
	const [timePeriod, setTimePeriod] = useState('7d')
	console.log('coinId: ', coinId)
	const {data, isFetching} = useGetCryptoDetailsQuery(coinId)
	console.log('coin data: ', data)
	const cryptoDetails: Coin = data?.data?.coin
	console.log('cryptoDetails: ', cryptoDetails)
	const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y']
	console.log('timePeriod: ', timePeriod)
	const stats = [
		{
			title: 'Price to USD',
			value: `$ ${
				cryptoDetails?.price && millify(Number(cryptoDetails?.price))
			}`,
			icon: <DollarCircleOutlined />,
		},
		{title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined />},
		{
			title: '24h Volume',
			value: `$ ${
				cryptoDetails?.['24hVolume'] &&
				millify(Number(cryptoDetails?.['24hVolume']))
			}`,
			icon: <ThunderboltOutlined />,
		},
		{
			title: 'Market Cap',
			value: `$ ${
				cryptoDetails?.marketCap && millify(Number(cryptoDetails?.marketCap))
			}`,
			icon: <DollarCircleOutlined />,
		},
		{
			title: 'All-time-high(daily avg.)',
			value: `$ ${
				cryptoDetails?.allTimeHigh?.price &&
				millify(Number(cryptoDetails?.allTimeHigh?.price))
			}`,
			icon: <TrophyOutlined />,
		},
	]

	const genericStats = [
		{
			title: 'Number Of Markets',
			value: cryptoDetails?.numberOfMarkets,
			icon: <FundOutlined />,
		},
		{
			title: 'Number Of Exchanges',
			value: cryptoDetails?.numberOfExchanges,
			icon: <MoneyCollectOutlined />,
		},
		{
			title: 'Aprroved Supply',
			value: cryptoDetails?.supply?.confirmed ? (
				<CheckOutlined />
			) : (
				<StopOutlined />
			),
			icon: <ExclamationCircleOutlined />,
		},
		{
			title: 'Total Supply',
			value: `$ ${
				cryptoDetails?.supply?.total &&
				millify(Number(cryptoDetails?.supply?.total))
			}`,
			icon: <ExclamationCircleOutlined />,
		},
		{
			title: 'Circulating Supply',
			value: `$ ${
				cryptoDetails?.supply?.circulating &&
				millify(Number(cryptoDetails?.supply?.circulating))
			}`,
			icon: <ExclamationCircleOutlined />,
		},
	]
	if (isFetching) return <h2>Loading</h2>
	return (
		<Col className='coin-detail-container'>
			<Col className='coin-heading-container'>
				<Title level={2} className='coin-name'>
					{data?.data?.coin.name} ({data?.data?.coin.symbol}) Price
				</Title>
				<p>
					{cryptoDetails.name} live price in US Dollar (USD). View value
					statistics, market cap and supply.
				</p>
			</Col>
			<Select
				defaultValue='7d'
				className='select-timeperiod'
				placeholder='Select Timeperiod'
				onChange={value => setTimePeriod(value)}>
				{time.map(date => (
					<Option key={date}>{date}</Option>
				))}
			</Select>

			<Col className='stats-container'>
				<Col className='coin-value-statistics'>
					<Col className='coin-value-statistics-heading'>
						<Title level={3} className='coin-details-heading'>
							{cryptoDetails.name} Value Statistics
						</Title>
						<p>
							An overview showing the statistics of {cryptoDetails.name}, such
							as the base and quote currency, the rank, and trading volume.
						</p>
					</Col>
					{stats.map(({icon, title, value}) => (
						<Col key={title} className='coin-stats'>
							<Col className='coin-stats-name'>
								<Text>{icon}</Text>
								<Text>{title}</Text>
							</Col>
							<Text className='stats'>{value}</Text>
						</Col>
					))}
				</Col>
				<Col className='other-stats-info'>
					<Col className='coin-value-statistics-heading'>
						<Title level={3} className='coin-details-heading'>
							Other Stats Info
						</Title>
						<p>
							An overview showing the statistics of {cryptoDetails.name}, such
							as the base and quote currency, the rank, and trading volume.
						</p>
					</Col>
					{genericStats.map(({icon, title, value}) => (
						<Col key={title} className='coin-stats'>
							<Col className='coin-stats-name'>
								<Text>{icon}</Text>
								<Text>{title}</Text>
							</Col>
							<Text className='stats'>{value}</Text>
						</Col>
					))}
				</Col>
			</Col>
			<Col className='coin-desc-link'>
				<Row className='coin-desc'>
					<Title level={3} className='coin-details-heading'>
						What is {cryptoDetails.name}?
					</Title>
					{HTMLReactParser(cryptoDetails.description)}
				</Row>
				<Col className='coin-links'>
					<Title level={3} className='coin-details-heading'>
						{cryptoDetails.name} Links
					</Title>
					{cryptoDetails.links?.map(link => (
						<Row className='coin-link' key={link.name}>
							<Title level={5} className='link-name'>
								{link.type}
							</Title>
							<a href={link.url} target='_blank' rel='noreferrer'>
								{link.name}
							</a>
						</Row>
					))}
				</Col>
			</Col>
		</Col>
	)
}

export default CryptoDetails
