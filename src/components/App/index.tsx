import {Layout} from 'antd'
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import CryptoCurrencies from '../Cryptocurrencies'
import CryptoDetails from '../CryptoDetails'
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
							<Route path='/crypto/:coinId' element={<CryptoDetails />} />
							<Route path='/exchanges' element={<Exchanges />} />
							<Route path='/news' element={<News />} />
						</Routes>
					</div>
				</Layout>
				<section className='footer'>
					<Footer />
				</section>
			</section>
		</section>
	)
}

export default App
