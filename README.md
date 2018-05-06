# Github dashboards

A simple github dashboard featuring:
1. Search users
2. Display repositories of the user

What this project includes
1. React, Redux
2. Redux saga to manage side effects (API calls, etc...)
3. Styled components + Polished
4. Jest tests
5. Axios
6. redux-actions which adhere's to Redux FSA (Flux standard actions)
7. React Router with hash router (hash router supports older browsers as well)

Future work
1. Improve test coverage
2. D3 visualization network / graph with zoom / pan
3. Redux persist for localstorage of certain slices in the redux store.
4. More performance tuning with reselect (memoization), perhaps reducer state normalization (normalizr) and lesser re-renders / better heuristics with shouldComponentUpdate
5. Loading state with spinner for users / repositories

## Building this project

Navigate to the root of this project before running the commands below

### NPM
`npm run build --production`

### Docker
Run this command below and then navigate to port 5000

`docker build . -t iamyohann/gitdashboards && docker run -d -p 5000:5000 iamyohann/gitdashboards`

Web UI will be available at 

[http://localhost:5000](http://localhost:5000)

## React/Redux Task

A simple task using `redux`, `react` and `redux-thunk`.

## The task

Use your http library of choice (`fetch`, `axios`, etc.) to interface with the [Github Developer API](https://developer.github.com/v3/). Your app should allow users to `search` for Github accounts via freetext input field, and display a list of all repositories owned by that account.

##### Getting technical
Ideally, you'll use these standards:
- `Redux` to manage your application state
- `React` class components for stateful components with logic
- `React` stateless functional components for presenting UI
- `styled-components` to style your app (just some simple styles will do!)

## Setup

Use `create-react-app` to bootstrap your application. 
