const Reducer = (state, action) => {
	switch (action.type) {
		case 'SET_CHARACTERS':
			return {
				...state,
				characters: action.payload
			}
		case 'SET_MOVIE':
			return {
				...state,
				selectedMovie: action.payload
			}
	}
}

export default Reducer
