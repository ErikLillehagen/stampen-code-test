
// swapi gives movies in order by release year, and that annoyed me.
export const sortEpisodesByNumber = (data) => data.results.sort((a, b) => (a.episode_id > b.episode_id) ? 1 : ((b.episode_id > a.episode_id) ? -1 : 0))

export const romanize = (num) => {
	if (isNaN(num)) { return NaN }
	var digits = String(+num).split('')
	var key = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
		'', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
		'', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
	var roman = ''
	var i = 3
	while (i--) { roman = (key[+digits.pop() + (i * 10)] || '') + roman }
	return Array(+digits.join('') + 1).join('M') + roman
}
