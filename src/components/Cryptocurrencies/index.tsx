import {Card, Col, Input, Row} from 'antd'
import millify from 'millify'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useGetCryptosQuery} from '../../services/cryptoApi'

export type LinkProps = {
	name: string
	type: string
	url: string
}
export type Coin = {
	'24hVolume': string
	btcPrice: string
	change: string
	coinrankingUrl: string
	color: string
	iconUrl: string
	listedAt: number
	lowVolume: boolean
	marketCap: string
	name: string
	price: string
	rank: number
	sparkline: string[]
	symbol: string
	tier: number
	uuid: string
	allTimeHigh: {
		price: string
		timestamp: string
	}
	numberOfMarkets: number
	numberOfExchanges: number
	supply: {
		total: string
		confirmed: boolean
		circulating: string
	}
	description: string
	links: LinkProps[]
}

type Crypto = {
	simplified: boolean
}

function Cryptocurrencies({simplified}: Crypto) {
	const count = simplified ? 10 : 100
	console.log('simplified in crypto: ', simplified)
	const {data: cryptosList, isFetching} = useGetCryptosQuery(count)
	const [cryptos, setCryptos] = useState<Coin[] | undefined>([])
	const [search, setSearch] = useState<string>('')
	console.log('cryptos: ', cryptos)
	console.log('cryptosList: ', cryptosList)
	useEffect(() => {
		const filteredData = cryptosList?.data?.coins.filter(coin =>
			coin.name.toLowerCase().includes(search.toLowerCase())
		)
		setCryptos(filteredData)
	}, [cryptosList, search])
	if (isFetching) return <h2>Loading...</h2>
	return (
		<>
			<div className='search-crypto'>
				<Input
					placeholder='Search Cryptocurrencies...'
					onChange={(e: React.FormEvent<HTMLInputElement>) =>
						setSearch(e.currentTarget.value)
					}
				/>
			</div>

			<Row gutter={[32, 32]} className='crypto__card-container'>
				{cryptos?.map(currency => (
					<Col
						xs={24}
						sm={12}
						lg={6}
						key={currency.uuid}
						className='crypto__card'>
						<Link to={`/crypto/${currency.uuid}`}>
							<Card
								title={`${currency.rank}. ${currency.name}`}
								extra={
									<img
										className='crypto__image'
										src={currency.iconUrl}
										alt={currency.name}
									/>
								}
								hoverable>
								<p>Price: {millify(Number(currency.price))}</p>
								<p>Market Cap: {millify(Number(currency.marketCap))}</p>
								<p>Daily Change: {millify(Number(currency.change))}%</p>
							</Card>
						</Link>
					</Col>
				))}
			</Row>
		</>
	)
}

export default Cryptocurrencies
