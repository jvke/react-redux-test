import { takeEvery, put, call } from 'redux-saga/effects';
import { search, searchSuccess, searchFailure } from '../redux/search';
import axios from 'axios';

import config from '../config';
import { handleSagaAPICall } from '../utils/api';

const searchRequest = function* _searchRequest({ payload }) {
  const { term = null } = payload;

  if (term) {
    yield call(handleSagaAPICall, axios.get, searchSuccess, searchFailure,
      `${config.api.host}/search/users`, {
        params: {
          q: term,
        }
      });
  } else {
    yield put(searchFailure(new Error("Invalid search term, please try again")));
  }
}

const searchFlow = function* _searchFlow() {
  yield takeEvery(search.toString(), searchRequest);
}

export { searchFlow };
