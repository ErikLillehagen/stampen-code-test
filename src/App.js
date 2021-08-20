import React from 'react'

import Navbar from './Components/UI/Navbar/Navbar'
import Store from './Store'

import './base.scss'

function App() {
	return (
		<Store>
			<div className="app">
				<Navbar/>
			</div>
		</Store>
	)
}
export default App
