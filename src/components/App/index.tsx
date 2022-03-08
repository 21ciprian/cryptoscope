import React from 'react'
// import {Switch, Route, Link} from 'react-router-dom'
// import {Layout, Typography, Space} from 'antd'
import Navbar from '../Navbar'
import './App.css'

function App() {
	return (
		<section className='app'>
			<section className='navbar'>
				<Navbar text='navbar' />
			</section>
			<section className='main'></section>
			<section className='footer'></section>
		</section>
	)
}

export default App
