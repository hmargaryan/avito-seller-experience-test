import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAIL
} from './types'

const fetchCommentsInitialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: []
}

export const fetchCommentsReducer = (state = fetchCommentsInitialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
        entities: []
      }
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: null,
        entities: action.payload
      }
    case FETCH_COMMENTS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action.payload,
        entities: []
      }
    default:
      return state
  }
}