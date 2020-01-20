import React from 'react'
import './chars.scss'

import CharacterListItem from '../../UI/CharacterListItem/CharacterListItem'

const data = [
	{
		name: 'Luke Skywalker',
		height: '172',
		weight: '77',
		gender: 'male',
		birth_year: '19BBY',
		films: [
			'https://swapi.co/api/films/2/',
			'https://swapi.co/api/films/6/',
			'https://swapi.co/api/films/3/',
			'https://swapi.co/api/films/1/',
			'https://swapi.co/api/films/7/'
		]
	},
	{
		name: 'Luke Skywalker',
		height: '172',
		weight: '77',
		gender: 'male',
		birth_year: '19BBY'
	},
	{
		name: 'Luke Skywalker',
		height: '172',
		weight: '77',
		gender: 'male',
		birth_year: '19BBY'
	},
	{
		name: 'Luke Skywalker',
		height: '172',
		weight: '77',
		gender: 'male',
		birth_year: '19BBY'
	}
]

const Characters = (props) => {
	return <div className="page" id="characters">
		<h1>Characters</h1>

		<div className="characterList">
			{ data.map((singleCharacter, index) => <CharacterListItem
				key={ index }
				character={ singleCharacter }
			/>) }
		</div>
	</div>
}

export default Characters
