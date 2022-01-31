<p align="center">
  <a href="https://github.com/crs-k/next-web-app-template/actions"><img alt="ci status" src="https://github.com/crs-k/next-web-app-template/actions/workflows/ci.yml/badge.svg"></a>
  <a href="https://github.com/crs-k/next-web-app-template/actions"><img alt="ci status" src="https://github.com/crs-k/next-web-app-template/actions/workflows/codeql-analysis.yml/badge.svg"></a>
</p>

# Next.js Web App Template Repository

This repository is to be used as a template when creating new web apps using [Next.js with TypeScript](https://github.com/vercel/next.js/blob/canary/docs/basic-features/typescript.md).

## Pre-requisites
`npm v8.0.0` or higher. Getstarted [here](https://www.npmjs.com/).

## Available Scripts
See [package.json](https://github.com/crs-k/next-web-app-template/blob/add-cypress/package.json) for details.
| Name | Description |
| ---- | ----------- |
| `dev` | Starts the development server on `http://localhost:3000`. |
| `lint` | Runs Next.js' built-in ESLint configuration. |
| `format` | Runs `prettier --write **/*.tsx`. |
| `build` | Builds the application for production usage. |
| `start` | Starts a Next.js production server. |
| `test` | Runs unit tests with coverage output. |
| `test:ci` | This changes the behavior when a new snapshot is encountered. Instead of the regular behavior of storing a new snapshot automatically, it will fail the test and require Jest to be run with `--updateSnapshot`. |
| `cypress` | Opens the Cypress browser. Run this in a separate terminal window after starting your server on `http://localhost:3000`. |
| `cypress:headless` | Runs Cypress headlessly. Run this in a separate terminal window after starting your server on `http://localhost:3000`. |
| `e2e` | Uses [start-server-and-test](https://www.npmjs.com/package/start-server-and-test). |
| `e2e:headless` | Uses [start-server-and-test](https://www.npmjs.com/package/start-server-and-test) headlessly. |
| `all` | Runs `npm run format`, `npm run lint`, `npm run test`, and `npm run build` together for local testing. |

## Contributing
Contributions are welcomed. Please read the [contributing](https://github.com/crs-k/next-web-app-template/blob/main/CONTRIBUTING.md).
