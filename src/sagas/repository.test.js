import React from 'react';
import ReactDOM from 'react-dom';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

jest.mock('../utils/api');

import * as apiUtils from '../utils/api';
import { repositoryRequest } from './repository';
import { repositorySuccess, repositoryFailure } from '../redux/repository';
import config from '../config';

describe('Sagas - Repository', () => {

  it('has a successful response', () => {

    const action = {
      payload: {
        user: 'foobar123',
      }
    };
    apiUtils.handleSagaAPICall = jest.fn();
    const generator = repositoryRequest(action);

    expect(generator.next().value).toEqual(call(
      apiUtils.handleSagaAPICall, axios.get, repositorySuccess, repositoryFailure, `${config.api.host}/users/${action.payload.user}/repos`, {
        params: {}
      }
    ));
  });

  it('handles an invalid user correctly', () => {
    const action = {
      payload: {
      }
    };
    apiUtils.handleSagaAPICall = jest.fn();
    const generator = repositoryRequest(action);

    expect(generator.next().value).toEqual(
      put(
        repositoryFailure(
          new Error('Invalid repository term, please try again')
        )
      )
    )
  });

});
