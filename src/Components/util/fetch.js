
export const fetchData = async(uri, callback) => {
	const result = await fetch(uri)
	const data = await result.json()
	callback(data)
	return data
}
