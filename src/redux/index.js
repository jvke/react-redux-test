import { createStore, combineReducers, applyMiddleware } from 'redux';
import search from './search';
import repository from './repository';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/root';

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeWithDevTools(
  applyMiddleware(
    sagaMiddleware,
  ),
);

const rootReducer = combineReducers({
  search,
  repository,
});

const store = createStore(rootReducer, {}, enhancer);

sagaMiddleware.run(rootSaga);

export { store };


