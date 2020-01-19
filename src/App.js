import React from 'react'
import dotenv from 'dotenv'

import { StateProvider } from './State/State'
import { initialState, reducer } from './State/reducer'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/UI/Footer/Footer'

import SignIn from './Pages/SignIn/SignIn'
import Start from './Pages/Start/Start'
import Admin from './Pages/Admin/Admin'

dotenv.config()

function App() {
	return <StateProvider
		initialState={ initialState }
		reducer={ reducer }
	>
		<div className="app">
			<Router >
				<Navbar />
				<Switch >
					<Route path="/admin" >
						<Admin />
					</Route>

					<Route path="/signin" >
						<SignIn />
					</Route>

					<Route path="/" >
						<Start />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	</StateProvider>
}

export default App
