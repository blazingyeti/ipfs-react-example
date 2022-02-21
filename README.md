# IPFS React Example

- Example App showing IPFS connectivity in React using [NFT.Storage](https://nft.storage/) library
- Needed to use [ViteJS](https://vitejs.dev/) instead of react-scripts because of webpack issues with NFT.Storage

## Setup

1. Get an API key from [NFT.Storage](https://nft.storage/)
1. Add API key to .env file's NFT_STORAGE_API_KEY variable
1. Have NodeJS installed
1. Install yarn if missing: `npm install yarn`
1. Run `yarn install`

## Commands

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br />
The page will reload if you make edits.<br />

### `yarn build`

Builds the app for production to the `dist` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
