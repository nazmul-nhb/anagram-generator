/** - Options for generating anagrams. */
export interface AnagramOptions {
	/** Limit the anagrams output. Default is `100`. */
	limit?: number | 'all';
	/** Whether to lookup in the dictionary. Default is `true`. */
	validWords?: boolean;
}
