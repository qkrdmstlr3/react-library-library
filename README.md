# 리액트 라이브러리 라이브러리

> ⭐️ 1K이상의 리액트와 연관된 라이브러리를 모아놓는 저장소

## Quick Start

**install**

```
npm install -g relili
yarn global add relili
```

**show list**

```
relili list
```

## Workflow

1. README.md에 라이브러리 추가/수정 후 main브랜치에 PR/Push
2. Github Action이 README.md를 파싱한 relili.json을 S3버킷에 저장
3. cli명령어 실행 시 S3에서 최신의 relili.json을 가져와 동작 수행

## PLAN

- [ ] typescript
- [ ] multi select & install

## 라이브러리 리스트

### 모노레포

| name         | stars                                                             | github                                           | npm                                               | docs                                                 |
| ------------ | ----------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------- | ---------------------------------------------------- |
| lerna        | ![stars](https://img.shields.io/github/stars/lerna/lerna)         | [github](https://github.com/lerna/lerna)         | [npm](https://www.npmjs.com/package/lerna)        | [docs](https://lerna.js.org/)                        |
| turborepo    | ![stars](https://img.shields.io/github/stars/vercel/turborepo)    | [github](https://github.com/vercel/turborepo)    | [npm](https://www.npmjs.com/package/turbo)        | [docs](https://turborepo.org/)                       |
| Nx           | ![stars](https://img.shields.io/github/stars/nrwl/nx)             | [github](https://github.com/nrwl/nx)             | [npm](https://www.npmjs.com/package/nx)           | [docs](https://nx.dev/)                              |
| rushstack    | ![stars](https://img.shields.io/github/stars/microsoft/rushstack) | [github](https://github.com/microsoft/rushstack) |                                                   | [docs](https://rushstack.io/)                        |
| ultra-runner | ![stars](https://img.shields.io/github/stars/folke/ultra-runner)  | [github](https://github.com/folke/ultra-runner)  | [npm](https://www.npmjs.com/package/ultra-runner) | [docs](https://github.com/folke/ultra-runner#readme) |

### 상태관리

| name   | stars                                                                     | github                                                   | npm                                         | docs                                    |
| ------ | ------------------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------- | --------------------------------------- |
| redux  | ![stars](https://img.shields.io/github/stars/reduxjs/redux)               | [github](https://github.com/reduxjs/redux)               | [npm](https://www.npmjs.com/package/redux)  | [docs](https://redux.js.org/)           |
| mobx   | ![stars](https://img.shields.io/github/stars/mobxjs/mobx)                 | [github](https://github.com/mobxjs/mobx)                 | [npm](https://www.npmjs.com/package/mobx)   | [docs](https://mobx.js.org/README.html) |
| recoil | ![stars](https://img.shields.io/github/stars/facebookexperimental/Recoil) | [github](https://github.com/facebookexperimental/Recoil) | [npm](https://www.npmjs.com/package/recoil) | [docs](https://recoiljs.org/)           |
| xstate | ![stars](https://img.shields.io/github/stars/statelyai/xstate)            | [github](https://github.com/statelyai/xstate)            | [npm](https://www.npmjs.com/package/xstate) | [docs](https://xstate.js.org/docs/)     |

### CSS

| name              | stars                                                                             | github                                                           | npm                                                       | docs                                         |
| ----------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------- | --------------------------------------------------------- | -------------------------------------------- |
| styled components | ![stars](https://img.shields.io/github/stars/styled-components/styled-components) | [github](https://github.com/styled-components/styled-components) | [npm](https://www.npmjs.com/package/styled-components)    | [docs](https://styled-components.com/)       |
| @emotion/react    | ![stars](https://img.shields.io/github/stars/emotion-js/emotion)                  | [github](https://github.com/emotion-js/emotion)                  | [npm](https://www.npmjs.com/package/@emotion/react)       | [docs](https://emotion.sh/docs/introduction) |
| @stitches/react   | ![stars](https://img.shields.io/github/stars/stitchesjs/stitches)                 | [github](https://github.com/stitchesjs/stitches)                 | [npm](https://www.npmjs.com/package/@stitches/react)      | [docs](https://stitches.dev/)                |
| vanilla-extract   | ![stars](https://img.shields.io/github/stars/seek-oss/vanilla-extract)            | [github](https://github.com/seek-oss/vanilla-extract)            | [npm](https://www.npmjs.com/package/@vanilla-extract/css) | [docs](https://vanilla-extract.style/)       |
| clsx              | ![stars](https://img.shields.io/github/stars/lukeed/clsx)                         | [github](https://github.com/lukeed/clsx)                         | [npm](https://www.npmjs.com/package/clsx)                 | [docs](https://github.com/lukeed/clsx)       |

### Headless

| name                  | stars                                                                 | github                                               | npm                                                        | docs                                      |
| --------------------- | --------------------------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------- |
| @headlessui/react     | ![stars](https://img.shields.io/github/stars/tailwindlabs/headlessui) | [github](https://github.com/tailwindlabs/headlessui) | [npm](https://www.npmjs.com/package/@headlessui/react)     | [docs](https://headlessui.com/react/menu) |
| @tanstack/react-table | ![stars](https://img.shields.io/github/stars/TanStack/table)          | [github](https://github.com/TanStack/table)          | [npm](https://www.npmjs.com/package/@tanstack/react-table) | [docs](https://tanstack.com/table/v8)     |

### 테스트

| name                   | stars                                                                               | github                                                             | npm                                                         | docs                                                                  |
| ---------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------- | --------------------------------------------------------------------- |
| mocha                  | ![stars](https://img.shields.io/github/stars/mochajs/mocha)                         | [github](https://github.com/mochajs/mocha)                         | [npm](https://www.npmjs.com/package/mocha)                  | [docs](https://mochajs.org/)                                          |
| jest                   | ![stars](https://img.shields.io/github/stars/facebook/jest)                         | [github](https://github.com/facebook/jest)                         | [npm](https://www.npmjs.com/package/jest)                   | [docs](https://jestjs.io/)                                            |
| @testing-library/react | ![stars](https://img.shields.io/github/stars/testing-library/react-testing-library) | [github](https://github.com/testing-library/react-testing-library) | [npm](https://www.npmjs.com/package/@testing-library/react) | [docs](https://testing-library.com/docs/react-testing-library/intro/) |
| storybook              | ![stars](https://img.shields.io/github/stars/storybookjs/storybook)                 | [github](https://github.com/storybookjs/storybook)                 | [npm](https://www.npmjs.com/package/storybook)              | [docs](https://storybook.js.org/)                                     |
| msw                    | ![stars](https://img.shields.io/github/stars/mswjs/msw)                             | [github](https://github.com/mswjs/msw)                             | [npm](https://www.npmjs.com/package/msw)                    | [docs](https://mswjs.io/)                                             |
| cypress                | ![stars](https://img.shields.io/github/stars/cypress-io/cypress)                    | [github](https://github.com/cypress-io/cypress)                    | [npm](https://www.npmjs.com/package/cypress)                | [docs](https://www.cypress.io/)                                       |
| autocannon             | ![stars](https://img.shields.io/github/stars/mcollina/autocannon)                   | [github](https://github.com/mcollina/autocannon)                   | [npm](https://www.npmjs.com/package/autocannon)             | [docs](https://github.com/mcollina/autocannon)                        |
| artillery              | ![stars](https://img.shields.io/github/stars/artilleryio/artillery)                 | [github](https://github.com/artilleryio/artillery)                 | [npm](https://www.npmjs.com/package/artillery)              | [docs](https://www.artillery.io/)                                     |

### 빌드도구

| name     | stars                                                              | github                                            | npm                                           | docs                                   |
| -------- | ------------------------------------------------------------------ | ------------------------------------------------- | --------------------------------------------- | -------------------------------------- |
| webpack  | ![stars](https://img.shields.io/github/stars/webpack/webpack)      | [github](https://github.com/webpack/webpack)      | [npm](https://www.npmjs.com/package/webpack)  | [docs](https://webpack.js.org/)        |
| snowpack | ![stars](https://img.shields.io/github/stars/FredKSchott/snowpack) | [github](https://github.com/FredKSchott/snowpack) | [npm](https://www.npmjs.com/package/snowpack) | [docs](https://www.snowpack.dev/)      |
| rollup   | ![stars](https://img.shields.io/github/stars/rollup/rollup)        | [github](https://github.com/rollup/rollup)        | [npm](https://www.npmjs.com/package/rollup)   | [docs](https://rollupjs.org/guide/en/) |
| esbuild  | ![stars](https://img.shields.io/github/stars/evanw/esbuild)        | [github](https://github.com/evanw/esbuild)        | [npm](https://www.npmjs.com/package/esbuild)  | [docs](https://esbuild.github.io/)     |

### 리액트

| name   | stars                                                         | github                                       | npm                                         | docs                               |
| ------ | ------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------- | ---------------------------------- |
| react  | ![stars](https://img.shields.io/github/stars/facebook/react)  | [github](https://github.com/facebook/react)  | [npm](https://www.npmjs.com/package/react)  | [docs](https://reactjs.org/)       |
| nextjs | ![stars](https://img.shields.io/github/stars/vercel/next.js)  | [github](https://github.com/vercel/next.js)  | [npm](https://www.npmjs.com/package/next)   | [docs](https://nextjs.org/)        |
| nextra | ![stars](https://img.shields.io/github/stars/shuding/nextra)  | [github](https://github.com/shuding/nextra)  | [npm](https://www.npmjs.com/package/nextra) | [docs](https://nextra.vercel.app/) |
| gatsby | ![stars](https://img.shields.io/github/stars/gatsbyjs/gatsby) | [github](https://github.com/gatsbyjs/gatsby) | [npm](https://www.npmjs.com/package/gatsby) | [docs](https://www.gatsbyjs.com/)  |
| remix  | ![stars](https://img.shields.io/github/stars/remix-run/remix) | [github](https://github.com/remix-run/remix) | [npm](https://www.npmjs.com/package/remix)  | [docs](https://remix.run/)         |

### 언어

| name       | stars                                                                         | github                                                       | npm                                             | docs                                    |
| ---------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------- | --------------------------------------- |
| typescript | ![stars](https://img.shields.io/github/stars/Microsoft/TypeScript)            | [github](https://github.com/Microsoft/TypeScript)            | [npm](https://www.npmjs.com/package/typescript) | [docs](https://www.typescriptlang.org/) |
| rescript   | ![stars](https://img.shields.io/github/stars/rescript-lang/rescript-compiler) | [github](https://github.com/rescript-lang/rescript-compiler) | [npm](https://www.npmjs.com/package/rescript)   | [docs](https://rescript-lang.org/)      |

### Schema

| name                     | stars                                                                           | github                                                         | npm                                                            | docs                                                              |
| ------------------------ | ------------------------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------- |
| ajv                      | ![stars](https://img.shields.io/github/stars/ajv-validator/ajv)                 | [github](https://github.com/ajv-validator/ajv)                 | [npm](https://www.npmjs.com/package/ajv)                       | [docs](https://ajv.js.org/)                                       |
| zod                      | ![stars](https://img.shields.io/github/stars/colinhacks/zod)                    | [github](https://github.com/colinhacks/zod)                    | [npm](https://www.npmjs.com/package/zod)                       | [docs](https://zod.dev/)                                          |
| json-shema-to-typescript | ![stars](https://img.shields.io/github/stars/bcherny/json-schema-to-typescript) | [github](https://github.com/bcherny/json-schema-to-typescript) | [npm](https://www.npmjs.com/package/json-schema-to-typescript) | [docs](http://borischerny.com/json-schema-to-typescript-browser/) |
| json-shema-to-ts         | ![stars](https://img.shields.io/github/stars/ThomasAribart/json-schema-to-ts)   | [github](https://github.com/ThomasAribart/json-schema-to-ts)   | [npm](https://www.npmjs.com/package/json-schema-to-ts)         | [docs](https://github.com/ThomasAribart/json-schema-to-ts)        |
| fast-json-stringify      | ![stars](https://img.shields.io/github/stars/fastify/fast-json-stringify)       | [github](https://github.com/fastify/fast-json-stringify)       | [npm](https://www.npmjs.com/package/fast-json-stringify)       | [docs](https://github.com/fastify/fast-json-stringify)            |
| typebox                  | ![stars](https://img.shields.io/github/stars/sinclairzx81/typebox)              | [github](https://github.com/sinclairzx81/typebox)              | [npm](https://www.npmjs.com/package/@sinclair/typebox)         | [docs](https://github.com/sinclairzx81/typebox)                   |

### 미분류

| name        | stars                                                          | github                                        | npm                                                  | docs                                  |
| ----------- | -------------------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------- | ------------------------------------- |
| sentry      | ![stars](https://img.shields.io/github/stars/getsentry/sentry) | [github](https://github.com/getsentry/sentry) | [npm](https://www.npmjs.com/package/@sentry/browser) | [docs](https://sentry.io/welcome/)    |
| react-query | ![stars](https://img.shields.io/github/stars/TanStack/query)   | [github](https://github.com/TanStack/query)   | [npm](https://www.npmjs.com/package/react-query)     | [docs](https://tanstack.com/query/v4) |
| swr         | ![stars](https://img.shields.io/github/stars/vercel/swr)       | [github](https://github.com/vercel/swr)       | [npm](https://www.npmjs.com/package/swr)             | [docs](https://swr.vercel.app/ko)     |

```

```
