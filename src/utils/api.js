import { put, call } from 'redux-saga/effects';
const handleSagaAPICall = function* _handleSagaAPICall(fetchFn, successFn, failFn, endpoint, ...args) {
  try {
    // do axios call
    const results = yield call(fetchFn, endpoint, ...args);

    if (results.statusText === 'OK') {
      yield put(successFn(results.data))
    } else {
      throw new Error('Unknown error has occurred');
    }
  } catch (e) {
    if (e.response && e.response.data) {
      yield put(failFn(new Error(e.response.data.message)));
    } else {
      yield put(failFn(new Error(e.message)));
    }
  }
}

export { handleSagaAPICall };
