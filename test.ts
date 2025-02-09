import { generateAnagrams } from './src';

console.info(
	generateAnagrams('brain', { validWords: false, limit: 'all' }),
);
