# Getting Started

## Available Scripts

To install node_module dependencies:
### `yarn` or `npm install`

In the project directory, you can run:

### `npm run dev` or `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run lint`

Will run `tsc` and `eslint`.

### `npm run test:e2e` or `yarn test:e2e`

Will run PlayWright E2E test. Might ask to install playwright. Keep an eye out on error logs `npm i playwright`

## API

Api is available on [https://fe-coding-challenge-server.vercel.app/](https://fe-coding-challenge-server.vercel.app/).
It is using `json-server`. Extensive documentation about `json-server` api can be found on their [official GitHub page](https://github.com/typicode/json-server#table-of-contents).

Api will always respond with MAX 10 items in the list (that does not mean there aren't more).
