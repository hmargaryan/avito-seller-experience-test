import {
  FETCH_STORIES_REQUEST,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_FAIL,
  FETCH_STORY_REQUEST,
  FETCH_STORY_SUCCESS,
  FETCH_STORY_FAIL
} from './types'

const fetchStoriesInitialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: []
}

export const fetchStoriesReducer = (state = fetchStoriesInitialState, action) => {
  switch (action.type) {
    case FETCH_STORIES_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
        entities: []
      }
    case FETCH_STORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: null,
        entities: action.payload
      }
    case FETCH_STORIES_FAIL:
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

const fetchStoryInitialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: {}
}

export const fetchStoryReducer = (state = fetchStoryInitialState, action) => {
  switch (action.type) {
    case FETCH_STORY_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
        entities: {}
      }
    case FETCH_STORY_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: null,
        entities: action.payload
      }
    case FETCH_STORY_FAIL:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action.payload,
        entities: {}
      }
    default:
      return state
  }
}