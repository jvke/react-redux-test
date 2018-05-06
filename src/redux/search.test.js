import React from 'react';
import ReactDOM from 'react-dom';
import { reducer, repository, searchSuccess, searchFailure, defaultState } from '../redux/search';
import { Reducer } from 'redux-testkit';

describe('Reducer - Search', () => {
  it('has a suitable default state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({ results: null, error: null });
  });
  it('has a suitable state when receiving repository success action', () => {
    Reducer(reducer).withState(defaultState).expect(searchSuccess('data')).toReturnState({
      results: 'data',
      error: null,
    })
  });
  it('has a suitable state when receiving repository failure action', () => {
    const error = new Error("Unable to fetch repositories");
    Reducer(reducer).withState(defaultState).expect(searchFailure(error)).toReturnState({
      results: null,
      error: error.message,
    })
  });
})
