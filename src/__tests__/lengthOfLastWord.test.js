import { lengthOfLastWord } from '../lengthOfLastWord';

describe('Length of last word', () => {
	it('should return 5 if the last word is world', () => {
		const result = lengthOfLastWord('Hello World');

		expect(result).toBe(5);
	});

	it('should return 4', () => {
		const result = lengthOfLastWord('   fly me   to   the moon  ');

		expect(result).toBe(4);
	});
});
