import React from 'react'
import './base.scss'

import Navbar from './Components/UI/Navbar/Navbar'
import Store from './Store'

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
