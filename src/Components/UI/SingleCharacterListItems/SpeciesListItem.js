import React from 'react'

const SpeciesListItem = ({ species }) => {
	if (species.length === 0) {
		return (
			<div className="speciesBox">
				<h3>Species</h3>
				<p>Name: Human</p>
				<p>Classification: mammal</p>
				<p>Designation: sentient</p>
				<p>Average height: 170 cm</p>
				<p>Average lifespan: 80 years</p>
				<p>Language: Galactic basic</p>
				<p>Human was missing in SW-API???</p>
			</div>
		)
	}
	return <div className="speciesBox">
		<h3>Species</h3>
		<p>Name: {species.name}</p>
		<p>Classification: {species.classification}</p>
		<p>Designation: {species.designation}</p>
		<p>Average height: {species.average_height} cm</p>
		<p>Average lifespan: {species.average_lifespan} years</p>
		<p>Language: {species.language}</p>
	</div>
}

export default SpeciesListItem
