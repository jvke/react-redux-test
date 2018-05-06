import React from 'react';
import ReactDOM from 'react-dom';
import { Reducer } from 'redux-testkit';
import { handleSagaAPICall } from './api';
import { call, put } from 'redux-saga/effects';

describe('Utils - API', () => {
  it('has a successful response', () => {
    const [fetchFn, successFn, failFn, endpoint, ...args] = [
      jest.fn(), jest.fn(), jest.fn(), 'my.endpoint', 1, 2, 3
    ]

    const apiResults = {
      statusText: "OK",
      data: "my response data",
    }
    successFn.mockReturnValue("SUCCESS");

    failFn.mockReturnValue("FAIL");

    const generator = handleSagaAPICall(fetchFn, successFn, failFn, endpoint, ...args);

    const results = generator.next().value;

    expect(results).toEqual(call(fetchFn, endpoint, ...args))

    const successPut = generator.next(apiResults).value;

    expect(successFn).lastCalledWith(apiResults.data);

    expect(successPut).toEqual(put(successFn(apiResults.data)))
  });
  it('has a error response', () => {
    const [fetchFn, successFn, failFn, endpoint, ...args] = [
      jest.fn(), jest.fn(), jest.fn(), 'my.endpoint', 1, 2, 3
    ]

    const apiResults = {
      statusText: "FAILURE",
      data: "my response data",
    }
    successFn.mockReturnValue("SUCCESS");

    failFn.mockReturnValue("FAIL");

    const generator = handleSagaAPICall(fetchFn, successFn, failFn, endpoint, ...args);

    const results = generator.next().value;

    expect(results).toEqual(call(fetchFn, endpoint, ...args))

    const failedPut = generator.next(apiResults).value;

    expect(failFn).lastCalledWith(new Error('Unknown error has occurred'));

  });
});
