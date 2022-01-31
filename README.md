<p align="center">
  <a href="https://github.com/crs-k/next-web-app-template/actions"><img alt="ci status" src="https://github.com/crs-k/next-web-app-template/actions/workflows/ci.yml/badge.svg"></a>
  <a href="https://github.com/crs-k/next-web-app-template/actions"><img alt="ci status" src="https://github.com/crs-k/next-web-app-template/actions/workflows/codeql-analysis.yml/badge.svg"></a>
</p>

# Next.js Web App Template Repository

This repository is to be used as a template when creating new web apps using [Next.js with TypeScript](https://github.com/vercel/next.js/blob/canary/docs/basic-features/typescript.md)

## Usage

### Pre-requisites
`npm v8.0.0` or higher

### Available Scripts
| Name | Description | Script |
| ---- | ----------- | ------ |
| `dev` | Starts the development server on `http://localhost:3000`. | `next dev` |
| `lint` | Runs Next.js' built-in ESLint configuration | `next lint` |
| `format` | Runs Prettier | `prettier --write **/*.tsx` |
| `build` | Builds the application for production usage | `next build` |
| `start` | Starts a Next.js production server | `next start` |
| `test` | Runs unit tests with coverage output | `jest --coverage` |
| `test:ci` | This changes the behavior when a new snapshot is encountered. Instead of the regular behavior of storing a new snapshot automatically, it will fail the test and require Jest to be run with `--updateSnapshot` | `jest --ci` |
| `cypress` | Opens the Cypress browser. Run this in a separate terminal window after starting your server on `http://localhost:3000`. | `cypress open` |
| `cypress:headless` | Runs Cypress headlessly. Run this in a separate terminal window after starting your server on `http://localhost:3000`. | `cypress run` |
| `e2e` | Uses [start-server-and-test](https://www.npmjs.com/package/start-server-and-test). | `start-server-and-test start http://localhost:3000 cypress` |
| `e2e:headless` | Uses [start-server-and-test](https://www.npmjs.com/package/start-server-and-test) headlessly. | `start-server-and-test start http://localhost:3000 cypress:headless` |    
| `all` | Runs several scripts for local testing. | `npm run format && npm run lint && npm run test && npm run build` |

## Contributing
Contributions are welcomed. Please read the [contributing](https://github.com/crs-k/next-web-app-template/blob/main/CONTRIBUTING.md).
