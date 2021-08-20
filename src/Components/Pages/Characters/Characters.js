import React, { Suspense, useContext, useEffect, useState } from 'react'
import './characters.scss'

import CharacterListItem from '../../UI/CharacterListItem/CharacterListItem'
import { fetchData } from '../../util/fetch'
import { Context } from '../../../Store'
import Loading from '../../UI/Loading/Loading'
import { useHistory } from 'react-router-dom'

const Characters = () => {
	const [state] = useContext(Context)
	const [characters, setCharacters] = useState([])
	const history = useHistory()
	useEffect(() => {
		const collectData = async() => {
			state.characters.forEach((characterUri) => {
				fetchData(characterUri, (result) => setCharacters(prev => ([...prev, result])))
			})
		}
		collectData()
	}, [state.characters])

	if (!state.selectedMovie) { history.push('/') }
	return (
		<Suspense fallback={<Loading />}>
			<div className="page" id="characters">
				<div className="sub-banner">
					<h1>{`Characters in ${ state.selectedMovie }`}</h1>
					<div />
					<button onClick={() => history.goBack()}>Back to movie details</button>
				</div>
				<div className="characterList">
					{ characters.map((singleCharacter, index) => <CharacterListItem
						key={ index }
						character={ singleCharacter }
					/>) }
				</div>
			</div>
		</Suspense>
	)
}

export default Characters
