# React/Redux Task

A simple task using `redux`, `react` and `redux-thunk`.

## The task

Use your http library of choice (`fetch`, `axios`, etc.) to interface with the [Github Developer API](https://developer.github.com/v3/). Your app should allow users to `search` for Github accounts via freetext input field, and display a list all repositories owned by that account.

##### Getting technical
Ideally, you'll use these standards:
- `Redux` actions to store your data
- `React` class components for stateful components with logic
- `React` stateless functional components for presenting UI
- `CSS modules` to style your app (just some simple styles will do!)

## Setup

Webpack (webpack-dev-server, babel-preset-es2015), Mocha (chai, enzyme), and NPM scripts have been set up for you. All you need to do is follow the steps below to get set up.

1. Fork this repository
2. Clone your forked repository &
3. Install dependencies (`npm install`)
4. Run `npm start` - your app will be live at `http://localhost:6789`

## Submission

To submit your code for review, submit a pull request to this repository with your completed task. If you have installed any new dependencies, document them in the `CHANGELOG.md`.

## NPM Tasks

| Command | Description |
|---------|-------------|
| `npm install` | Fetch dependencies and build binaries for any of the modules |
| `npm start` | Fire up Webpack Dev Server, app will go live on `http://localhost:6789` |
| `npm run clean` | Remove `build` directory |
| `npm run build:dev` | Build `bundle.js` using the `development` environment |
| `npm run build:stage` | Build `bundle.js` using the `staging` environment |
| `npm run build:prod` | Build `bundle.js` using the `production` environment |
| `npm test` | Run test suite |

## Boilerplate

Thanks to @fknussel for the react-boilerplate used to bootstrap this project.
