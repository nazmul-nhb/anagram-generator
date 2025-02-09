# Anagram Generator

Anagram Generator is a utility package that efficiently generates unique anagrams of a given word. It supports filtering anagrams based on a dictionary (English; embedded in the package) and limiting the number of results.

## Features

- Generates unique anagrams for a given word.
- Limits the number of anagrams returned (default: 100, unlimited option available).
- Supports filtering anagrams based on an embedded English dictionary.
- Ensures the original word is always included in the output as the first element.

## Installation

Install via npm or yarn:

```sh
npm install nhb-anagram-generator
```

```sh
pnpm add nhb-anagram-generator
```

```sh
yarn add nhb-anagram-generator
```

## Usage

### Importing the function

```ts
import { generateAnagrams } from 'nhb-anagram-generator';
```

### Generating anagrams

```ts
const anagrams = generateAnagrams('listen');
console.log(anagrams);
// Example output: ["listen", "silent", "enlist", "tinsel", "inlets", "slinte"]
```

### Using options

You can specify options such as limiting results or filtering valid dictionary words. By default it generates valid anagrams found in the dictionary.

```ts
import { generateAnagrams } from 'nhb-anagram-generator';

const options = {
  limit: 50, // Return a maximum of 50 anagrams
  validWords: false, // Include all generated anagrams no matter valid or invalid (not found in dictionary)
};

const anagrams = generateAnagrams('brain', options);
console.log(anagrams);
// Example output: ['brain', 'brani', 'brian', 'brina', 'brnai', 'brnia', 'barin', ...]
```

## API Reference

### `generateAnagrams(word: string, options?: AnagramOptions): string[]`

#### Parameters

- `word` (string) - The input word to generate anagrams from.
- `options` (optional)
  - `limit` (`number | 'all'`) - The maximum number of anagrams to return. Default is `100`. Set to `'all'` for unlimited or any other limit (e.g. `500`) of your choice.
  - `validWords` (`boolean`) - If `true`, only words found in the dictionary will be returned. Default is `true`.

#### Returns

- An array of generated anagrams (all lowercase). The first element is always the given word.

## Dictionary Support

- The package includes a built-in dictionary to validate generated anagrams.
- To disable dictionary validation, set `{validWords: false}` in options.

## License

This package is licensed under the MIT License.
