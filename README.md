# API Extractor Issue Reproduction
1. Clone the repo
2. Run `npm i`
3. Run `npm run compile && api-extractor run`

Note the error on line 4 of the generated `api-extractor-repro.d.ts`. `Bloom` is an export of the only dependency, `@ethereumjs/vm`, but for some reason API extractor doesn't recognize `Bloom` and being a part of `@ethereumjs/vm`.