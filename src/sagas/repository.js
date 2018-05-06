import { takeEvery, put, call } from 'redux-saga/effects';
import { repository, repositorySuccess, repositoryFailure } from '../redux/repository';
import axios from 'axios';

import config from '../config';
import { handleSagaAPICall } from '../utils/api';

const repositoryRequest = function* _repositoryRequest({ payload }) {
  const { user = null } = payload;

  if (user) {
    yield call(handleSagaAPICall, axios.get, repositorySuccess, repositoryFailure,
      `${config.api.host}/users/${user}/repos`, {
        params: {}
      });
  } else {
    yield put(repositoryFailure(new Error('Invalid repository term, please try again')));
  }
}

const repositoryFlow = function* _repositoryFlow() {
  yield takeEvery(repository.toString(), repositoryRequest);
}

export { repositoryFlow, repositoryRequest };
