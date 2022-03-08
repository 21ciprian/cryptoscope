import {Avatar, Button, Typography} from 'antd'
import React from 'react'
import {Link} from 'react-router-dom'
// import {
// 	HomeOutlined,
// 	MoneyCollectFilled,
// 	BulbOutlined,
// 	FundOutlined,
// 	MenuOutlined,
// } from '@ant-design/icons'
import logo from '../../assets/clogo.png'

type Props = {text: string}

const Navbar = ({text}: Props) => {
	return (
		<nav className='nav__container'>
			<div className='nav__logo-container'>
				<Avatar src={logo} size='large' />
				<Typography.Title level={2} className='logo'>
					<Link to='/'>CryptoScope</Link>
				</Typography.Title>
				<Button className='menu__control-container'></Button>
			</div>
		</nav>
	)
}

export default Navbar
