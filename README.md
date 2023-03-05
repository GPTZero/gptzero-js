# gptzero-js

[![npm package][npm-img]][npm-url]
<!-- [![Build Status][build-img]][build-url] -->
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
<!-- [![Code Coverage][codecov-img]][codecov-url] -->
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> A GPTZero client library for javascript

## Install

```bash
npm install gptzero
```

## Usage

```ts
import { createClient  } from 'gptzero-js';

// Create a client to all the GPTZero API
const gptzero = createClient('<YOUR API KEY>')

// Get output for a single string document
gptzero.predictText("Teachers worried about students turning in essays written by a popular artificial intelligence chatbot now have a new tool of their own. Edward Tian, a 22-year-old senior at Princeton University, has built an app to detect whether text is written by ChatGPT, the viral chatbot that's sparked fears over its potential for unethical uses in academia. Tian, a computer science major who is minoring in journalism, spent part of his winter break creating GPTZero, which he said can 'quickly and efficiently' decipher whether a human or ChatGPT authored an essay.");

// Get batched output for files (must be doc, docx, pdf, or txt)
gptzero.predictFiles(["/path/to/file"])


// Output from predictText:
{
    "documents": [
        {
            "average_generated_prob": 0,
            "completely_generated_prob": 0.004087193460490459,
            "overall_burstiness": 33.560890197753906,
            "paragraphs": [
                {
                    "completely_generated_prob": 0.004087193460490459,
                    "num_sentences": 3,
                    "start_sentence_index": 0
                }
            ],
            "sentences": [
                {
                    "generated_prob": 0,
                    "perplexity": 70,
                    "sentence": "Teachers worried about students turning in essays written by a popular artificial intelligence chatbot now have a new tool of their own."
                },
                {
                    "generated_prob": 0,
                    "perplexity": 52,
                    "sentence": "Edward Tian, a 22-year-old senior at Princeton University, has built an app to detect whether text is written by ChatGPT, the viral chatbot that's sparked fears over its potential for unethical uses in academia."
                },
                {
                    "generated_prob": 0,
                    "perplexity": 117,
                    "sentence": "Tian, a computer science major who is minoring in journalism, spent part of his winter break creating GPTZero, which he said can 'quickly and efficiently' decipher whether a human or ChatGPT authored an essay."
                }
            ]
        }
    ]
}
```

## API

For documentation on the output object, see https://gptzero.me/docs

## Acknowledgements
Big thanks to https://github.com/ryansonshine/typescript-npm-package-template, on which we built this package.

[build-img]:https://github.com/GPTZero/gptzero-js/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/GPTZero/gptzero-js/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/gptzero-js
[downloads-url]:https://www.npmtrends.com/gptzero-js
[npm-img]:https://img.shields.io/npm/v/gptzero-js
[npm-url]:https://www.npmjs.com/package/gptzero-js
[issues-img]:https://img.shields.io/github/issues/GPTZero/gptzero-js
[issues-url]:https://github.com/GPTZero/gptzero-js/issues
[codecov-img]:https://codecov.io/gh/GPTZero/gptzero-js/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/GPTZero/gptzero-js
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
