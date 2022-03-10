import {Layout, Space, Typography} from 'antd'
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import CryptoCurrencies from '../Cryptocurrencies'
import Exchanges from '../Exchanges'
import Footer from '../Footer'
import Home from '../Home'
import Navbar from '../Navbar'
import News from '../News'
import './App.css'

function App() {
	return (
		<section className='app'>
			<section className='navbar'>
				<Navbar text='navbar' />
			</section>
			<section className='main'>
				<Layout>
					<div className='routes'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/crypto' element={<CryptoCurrencies simplified />} />
							<Route path='/exchanges' element={<Exchanges />} />
							<Route path='/news' element={<News />} />
						</Routes>
					</div>
					<Typography></Typography>
					<Space></Space>
				</Layout>
			</section>
			<section className='footer'>
				<Footer />
			</section>
		</section>
	)
}

export default App
