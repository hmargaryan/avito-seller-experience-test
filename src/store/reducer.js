import { combineReducers } from 'redux'
import { fetchStoriesReducer, fetchStoryReducer } from './story/reducers'
import { fetchCommentsReducer } from './comment/reducers'

export default combineReducers({
  stories: fetchStoriesReducer,
  story: fetchStoryReducer,
  comments: fetchCommentsReducer
})