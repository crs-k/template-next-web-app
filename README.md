<p align="center">
  <a href="https://github.com/crs-k/next-web-app-template/actions"><img alt="ci status" src="https://github.com/crs-k/next-web-app-template/actions/workflows/ci.yml/badge.svg"></a>
  <a href="https://github.com/crs-k/next-web-app-template/actions"><img alt="ci status" src="https://github.com/crs-k/next-web-app-template/actions/workflows/codeql-analysis.yml/badge.svg"></a>
</p>

# Next.js Web App Template Repository

This repository is to be used as a template when creating new web apps using [Next.js with TypeScript](https://github.com/vercel/next.js/blob/canary/docs/basic-features/typescript.md).

The following packages are included in addition to Next.js & dependencies:
* [Cypress](https://www.npmjs.com/package/cypress) - Fast, easy and reliable testing for anything that runs in a browser.
* [ESLint](https://www.npmjs.com/package/eslint) - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
* [Jest](https://www.npmjs.com/package/jest) - Delightful JavaScript Testing.
* [Prettier](https://www.npmjs.com/package/prettier) -  Prettier is an opinionated code formatter. 
* [tailwindcss](https://www.npmjs.com/package/tailwindcss) -  A utility-first CSS framework for rapidly building custom user interfaces.


## Pre-requisites
`npm v8.0.0` or higher. Get started [here](https://www.npmjs.com/).

## Getting Started
* Create a new repository using this as a [template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).
* [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) your new repository.
* Run `npm install`.
* Run `npm all`.

## Available Scripts
See [`package.json`](package.json) for details.
| Name | Description |
| ---- | ----------- |
| `npm run dev` | Starts the development server on `http://localhost:3000`. |
| `npm run lint` | Runs Next.js' built-in ESLint configuration. |
| `npm run format` | Runs `prettier --write **/*.tsx`. |
| `npm run build` | Builds the application for production usage. |
| `npm run start` | Starts a Next.js production server. |
| `npm run test` | Runs unit tests with coverage output. |
| `npm run test:ci` | This changes the behavior when a new snapshot is encountered. Instead of the regular behavior of storing a new snapshot automatically, it will fail the test and require Jest to be run with `--updateSnapshot`. |
| `npm run nyc:coverage` | Runs coverage report on Cypress tests and checks for thresholds defined in [`.nycrc`](.nycrc). |
| `npm run cypress` | Opens the Cypress browser. Run this in a separate terminal window after starting your server on `http://localhost:3000`. |
| `npm run cypress:headless` | Runs Cypress headlessly. Run this in a separate terminal window after starting your server on `http://localhost:3000`. |
| `npm run cypress:headless:edge` | Runs Cypress headlessly with Edge. Run this in a separate terminal window after starting your server on `http://localhost:3000`. |
| `npm run cypress:headless:chrome` | Runs Cypress headlessly with Chrome. Run this in a separate terminal window after starting your server on `http://localhost:3000`. |
| `npm run cypress:headless:firefox` | Runs Cypress headlessly with Firefox. Run this in a separate terminal window after starting your server on `http://localhost:3000`. |
| `npm run e2e` | Uses [start-server-and-test](https://www.npmjs.com/package/start-server-and-test). |
| `npm run e2e:headless` | Uses [start-server-and-test](https://www.npmjs.com/package/start-server-and-test) headlessly. |
| `npm run e2e:headless:edge` | Uses [start-server-and-test](https://www.npmjs.com/package/start-server-and-test) headlessly with Edge. |
| `npm run e2e:headless:chrome` | Uses [start-server-and-test](https://www.npmjs.com/package/start-server-and-test) headlessly with Chrome. |
| `npm run e2e:headless:firefox` | Uses [start-server-and-test](https://www.npmjs.com/package/start-server-and-test) headlessly with Firefox. |
| `npm run all` | Runs `npm run format`, `npm run lint`, `npm run test`, and `npm run build` together for local testing. |

## Available Actions
| Name | Description |
| ---- | ----------- |
| `ci-cd` | Runs [`Test-Lint`, `Test-Unit`, `Test-e2e`, `Test-Infrastructure`, `Test-Build`] then deploys to an environment based on release tag. |
| `dependabot-automerge` | Automatically approves and merges Dependabot PRs, except major releases. |
| `labeler` | More info [here](https://github.com/actions/labeler). |
| `release-draft` | More info [here](https://github.com/marketplace/actions/release-draft). |
| `stale` | More info [here](https://github.com/marketplace/actions/close-stale-issues). |

## Contributing
Contributions are welcomed. Please read the [contributing](https://github.com/crs-k/next-web-app-template/blob/main/CONTRIBUTING.md).
