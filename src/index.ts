import wordsData from './data/english-words.json';
import type { AnagramOptions } from './types';

const dictionary = new Set(
	(wordsData as { words: string[] }).words.map((word) => word.toLowerCase()),
);

/**
 * * Efficiently generates unique anagrams of a word.
 * @param word The word for generating anagrams.
 * @param options The options to generate anagrams: limit the output, should lookup in the dictionary.
 * @returns An array of generated anagrams. THe first element is always the given word.
 */
export function generateAnagrams(
	word: string,
	options?: AnagramOptions,
): string[] {
	if (word.length <= 1) return [word];

	const { limit = 100, validWords = false } = options || {};

	const uniqueAnagrams = new Set<string>();

	/**
	 * * Helper function to generate permutations.
	 * @param str Current permutation being formed.
	 * @param remaining Remaining characters to process.
	 */
	const _permute = (str: string, remaining: string) => {
		if (!remaining.length) {
			if (!validWords || dictionary.has(str)) {
				uniqueAnagrams.add(str);
			}
			return;
		}

		for (let i = 0; i < remaining.length; i++) {
			_permute(
				str + remaining[i],
				remaining.slice(0, i) + remaining.slice(i + 1),
			);

			if (limit !== 'all' && uniqueAnagrams.size >= limit) return;
		}
	};

	_permute('', word.toLowerCase());

	return Array.from(uniqueAnagrams);
}
