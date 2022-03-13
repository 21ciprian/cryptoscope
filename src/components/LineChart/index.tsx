import {Col, Row, Typography} from 'antd'
import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Tooltip,
} from 'chart.js'
import React from 'react'
import {Line} from 'react-chartjs-2'
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend
)
const {Title, Text} = Typography

export type History = {
	price: string
	timestamp: string
}
export type Data = {
	data: {
		change: string
		history: History[]
	}
}
export type Props = {
	coinHistory: Data
	currentPrice: string
	coinName: string
}
function LineChart({coinHistory, currentPrice, coinName}: Props) {
	const coinPrice = []
	const coinTimestamp = []
	for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
		coinPrice.push(coinHistory.data.history[i].price)
		coinTimestamp.push(
			new Date(
				Number(coinHistory.data.history[i].timestamp) * 1000
			).toLocaleDateString('en-US')
		)
	}
	console.log('coinTimestamp[0]: ', coinTimestamp[0])
	console.log(
		'coinHistory.data.history[0].timestamp: ',
		coinHistory.data.history[0].timestamp
	)
	const data = {
		labels: coinTimestamp,
		datasets: [
			{
				label: 'Price in USD',
				data: coinPrice,
				fill: false,
				backgroundColor: 'skyblue',
				borderColor: 'blue',
			},
		],
	}
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top' as const,
			},
			intersect: true,
			title: {
				display: true,
			},
		},
	}

	//coinHistory, currentPrice, coinName
	return (
		<>
			<Row className='chart-header'>
				<Title level={2} className='chart-title'>
					{coinName} Price Chart
				</Title>
				<Col className='price-container'>
					<Title level={5} className='price-change'>
						{coinHistory?.data?.change}%
					</Title>
					<Title level={5} className='current-price'>
						{' '}
						Current {coinName} Price: $ {currentPrice}
					</Title>
				</Col>
			</Row>
			<Line data={data} options={options} />
		</>
	)
}

export default LineChart
