import React from 'react'

const SingleCharacterListItem = ({ character }) => {
	return <div className="singleCharacterListItem">
		<h3>Character</h3>
		<p>Name: {character.name}</p>
		<p>Birth year: {character.birth_year}</p>
		<p>Gender: {character.gender}</p>
		<p>Height: {character.height} cm</p>
		<p>Weight: {character.mass} kg</p>
		<p>Hair color: {character.hair_color}</p>
		<p>Eye color: {character.eye_color}</p>
		<p>Skin color: {character.skin_color}</p>
	</div>
}

export default SingleCharacterListItem
