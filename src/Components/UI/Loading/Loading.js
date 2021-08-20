import React, { useState } from 'react'

import './loading.scss'

const Loading = (props) => {
	const [dots, setDots] = useState('')
	setInterval(() => {
		if (dots.length < 3) {
			setDots(dots + '.')
		} else {
			setDots('')
		}
	}, 600)

	return <p className='loader'>Loading { dots }</p>
}

export default Loading
