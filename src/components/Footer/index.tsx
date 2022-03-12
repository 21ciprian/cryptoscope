import {Space, Typography} from 'antd'
import React from 'react'
import {Link} from 'react-router-dom'
type Props = {}

function Footer({}: Props) {
	return (
		<footer>
			<Typography.Title level={5}>
				&copy; CryptoScope {new Date().getFullYear()}
			</Typography.Title>
			<Space>
				<Link to='/'>Home</Link>
				<Link to='/crypto'>CryptoCurrencies</Link>
				<Link to='/exchanges'>Exchanges</Link>
				<Link to='/news'>News</Link>
			</Space>
		</footer>
	)
}

export default Footer
