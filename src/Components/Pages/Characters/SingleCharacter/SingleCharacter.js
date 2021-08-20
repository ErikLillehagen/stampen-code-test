import React, { Suspense, useEffect, useState } from 'react'
import { fetchData } from '../../../util/fetch'
import { useHistory } from 'react-router-dom'

import StarshipListItem from '../../../UI/SingleCharacterListItems/StarshipListItem'
import SingleCharacterListItem from '../../../UI/SingleCharacterListItems/SingleCharacterListItem'
import PlanetListItem from '../../../UI/SingleCharacterListItems/PlanetListItem'
import SpeciesListItem from '../../../UI/SingleCharacterListItems/SpeciesListItem'
import Loading from '../../../UI/Loading/Loading'

import './singleCharacter.scss'

const SingleCharacter = ({ match: { params: { name } } }) => {
	const [character, setCharacter] = useState([])
	const [species, setSpecies] = useState([])
	const [planet, setPlanet] = useState([])
	const [starships, setStarships] = useState([])
	const history = useHistory()

	useEffect(() => {
		const collectData = async() => {
			const result = await fetchData(`https://swapi.dev/api/people/?search=${ name }`, (result) => setCharacter(result.results[0]))
			const characterData = result.results[0]
			fetchData(characterData.species, setSpecies)
			fetchData(characterData.homeworld, setPlanet)
			characterData.starships.forEach((starship) => {
				fetchData(starship, (result) => setStarships(prevShips => ([...prevShips, result])))
			})
		}
		collectData()
	}, [name])

	return (
		<Suspense fallback={<Loading />}>
			<div className="page">
				<div className="sub-banner">
					<h1>{character.name}</h1>
					<div />
					<button onClick={() => history.goBack()}>Back to character selection</button>
				</div>
				<div className="topPanel">
					<Suspense fallback={<Loading />}>
						<SingleCharacterListItem character={character}/>
					</Suspense>
					<Suspense fallback={<Loading />}>
						<PlanetListItem planet={planet} />
					</Suspense>
					<Suspense fallback={<Loading />}>
						<SpeciesListItem species={species} />
					</Suspense>
				</div>
				{starships.length > 0 &&
				<div>
					<h1>Star ships</h1>
					<div className="starshipBox">
						<Suspense fallback={<Loading />}>
							{starships.map((ship, index) => {
								return <StarshipListItem starship={ship} key={index} />
							})}
						</Suspense>
					</div>
				</div>
				}
			</div>
		</Suspense>
	)
}

export default SingleCharacter
