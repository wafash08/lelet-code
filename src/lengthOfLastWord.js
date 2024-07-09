/**
 * @param {string} s
 * @return {number}
 */
export function lengthOfLastWord(s) {
	const sWithoutSpaces = s.trim();
	let word = [];
	for (let i = sWithoutSpaces.length - 1; i > 0; i--) {
		if (sWithoutSpaces[i] === ' ') {
			break;
		} else {
			word.unshift(sWithoutSpaces[i]);
		}
	}
	return word.length;
}

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('   fly me   to   the moon  '));
console.log(lengthOfLastWord('luffy is still joyboy'));
