
import { all } from 'redux-saga/effects';
import { searchFlow } from './search';
import { repositoryFlow } from './repository';

export default function* rootSaga() {
  yield all([
    searchFlow(),
    repositoryFlow(),
  ])
}

