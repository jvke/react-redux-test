import { createActions, handleActions } from 'redux-actions';

const defaultState = {
  results: null,
  error: null,
};

const { search, searchSuccess, searchFailure } = createActions({
  SEARCH: (term) => ({ term }),
  SEARCH_SUCCESS: (results) => ({ results }),
  SEARCH_FAILURE: (error) => ({ error }),
});

const reducer = handleActions(
  {
    [searchSuccess](
      state,
      {
        payload: { results }
      }
    ) {
      return { ...state, results, error: null, };
    },
    [searchFailure](
      state,
      {
        payload
      }
    ) {
      return { ...state, error: payload.message, results: null };
    }
  },
  defaultState
);

export default reducer;
export { reducer, search, searchSuccess, searchFailure, defaultState };
