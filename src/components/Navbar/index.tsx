import {
	BulbOutlined,
	FundOutlined,
	HomeOutlined,
	MenuOutlined,
	MoneyCollectOutlined,
} from '@ant-design/icons'
import {Avatar, Button, Menu, Typography} from 'antd'
import React from 'react'
import {Link} from 'react-router-dom'
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
			<Menu.Item icon={<HomeOutlined />}>
				<Link to='/'>Home</Link>
			</Menu.Item>
			<Menu.Item icon={<FundOutlined />}>
				<Link to='/crypto'>Crypto</Link>
			</Menu.Item>
			<Menu.Item icon={<MoneyCollectOutlined />}>
				<Link to='/exchanges'>Exchanges</Link>
			</Menu.Item>
			<Menu.Item icon={<BulbOutlined />}>
				<Link to='/news'>News</Link>
			</Menu.Item>
			<Menu.Item icon={<MenuOutlined />}>
				<Link to='/menu'>Menu</Link>
			</Menu.Item>
		</nav>
	)
}

export default Navbar
