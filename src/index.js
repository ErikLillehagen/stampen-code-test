import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

/** Import fonts */
import './fonts/BrittanySignature.ttf'
import './fonts/Cervanttis.ttf'
import './fonts/ColabMed.otf'
import './fonts/ColabBol.otf'
import './fonts/ColabLig.otf'
import './fonts/ColabReg.otf'
import './fonts/ColabThi.otf'

/** Project Styling */
import './Sass/index.scss'

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
