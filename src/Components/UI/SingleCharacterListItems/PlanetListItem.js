import React from 'react'

const PlanetListItem = ({ planet }) => {
	return <div className="planetListItem">
		<h3>Home Planet</h3>
		<p>Name: {planet.name}</p>
		<p>Diameter: {planet.diameter}</p>
		<p>Rotation period: {planet.rotation_period} standard hours</p>
		<p>Gravity: {planet.gravity}</p>
		<p>Population: {planet.population}</p>
		<p>Climate: {planet.climate}</p>
		<p>Terrain: {planet.terrain}</p>
		<p>Surface water: {planet.surface_water}%</p>
	</div>
}

export default PlanetListItem
