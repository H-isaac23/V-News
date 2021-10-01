# V-Updates Project

This project is a fanmade site for getting the latest relevant tweets from popular Virtual Youtubers.

## Setup

To set up and run the project you will need to have [node](https://nodejs.org/en/) (at least version 12) and [yarn](https://yarnpkg.com/) installed.

## Status

See Issue [#47](https://github.com/H-isaac23/V-Updates/issues/47)

## Design

Refer to Issue [#2](https://github.com/H-isaac23/V-Updates/issues/2).

### Frontend

The frontend uses [reactjs](https://reactjs.org/)

Use the `public` folder for images and assets.

For styling there is [scss with css modules](https://nextjs.org/docs/basic-features/built-in-css-support), so do not ever put any css inline unless absolutely required.

Also for styling there is the `variables.scss` which is to be used for global variables like colors and mixins.
The `globals.scss` is mainly used for standardization and should rarely be touched at all.

### Backend

The backend uses [Express.js](https://expressjs.com/) as server for hosting a REST API, which is all set up inside the `src/index.js`.
Backend also uses several other library:

- [Mongoose](https://expressjs.com/) as ODM for Mongo DB
- [cors](https://www.npmjs.com/package/cors) as enabler for CORS requests

#### Backend Folder Structure

```
backend
├───src
    ├───controllers
    ├───middlewares
    ├───models
    │   └───schemas
    ├───services
├───index.js
├───.env.example
├───package.json
└───package-lock.json
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm startFrontend`

Runs the frontend in development mode.\
Test data isn't currently available for viewing.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm startBackend`

Runs the backend in development mode.\
Open Postman/VS Code Rest Client/ or some other rest api tool to make http requests.

## License
SVGs used were from fontawesome. [Link to the license](https://fontawesome.com/license)

[MIT](https://opensource.org/licenses/MIT)

