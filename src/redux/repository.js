import { createActions, handleActions } from 'redux-actions';

const defaultState = {
  results: null,
  error: null,
};

const { repository, repositorySuccess, repositoryFailure } = createActions({
  REPOSITORY: (user) => ({ user }),
  REPOSITORY_SUCCESS: (results) => ({ results }),
  REPOSITORY_FAILURE: (error) => ({ error }),
});

const reducer = handleActions(
  {
    [repositorySuccess](
      state,
      {
        payload: { results }
      }
    ) {
      return { ...state, results, error: null, };
    },
    [repositoryFailure](
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
export { reducer, repository, repositorySuccess, repositoryFailure, defaultState };
