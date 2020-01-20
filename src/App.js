import React from 'react'
import './base.scss'

import Navbar from './Components/UI/Navbar/Navbar'

import Characters from './Components/Pages/Characters/Characters'
import Movies from './Components/Pages/Movies/Movies'

function App() {
	return <div className="app">
		<Navbar />
		<Movies />
		<Characters />
	</div>
}

export default App
