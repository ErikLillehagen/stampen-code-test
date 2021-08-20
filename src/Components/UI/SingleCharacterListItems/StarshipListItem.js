import React from 'react'

const StarshipListItem = ({ starship }) => {
	return <div className="starshipListItem">
		<h2>{ starship.name }</h2>
		<table className="starship-data" ><tbody>
			<tr><td className="bold">Model</td><td>{ starship.model }</td></tr>
			<tr><td className="bold">Class</td><td>{ starship.starship_class }</td></tr>
			<tr><td className="bold">Length</td><td>{ starship.length } m</td></tr>
			<tr><td className="bold">Crew</td><td>{ starship.crew }</td></tr>
			<tr><td className="bold">Passengers</td><td>{ starship.passengers }</td></tr>

		</tbody></table>
	</div>
}

export default StarshipListItem
