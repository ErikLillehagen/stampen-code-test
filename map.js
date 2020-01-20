const numbers = [
	1,
	2,
	3,
	4,
	5,
	6
]

// numbers.forEach((singleNumber) => {
// 	console.log('Number = ', singleNumber)
// })

const newNumbers = numbers.map((singleNumber) => {
	return singleNumber * 2
})

console.log('New = ', newNumbers)
