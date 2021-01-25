import {
  FETCH_STORIES_REQUEST,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_FAIL,
  FETCH_STORY_REQUEST,
  FETCH_STORY_SUCCESS,
  FETCH_STORY_FAIL
} from './types'
import hackerNews from '../../api/hackerNews'
import fetchItem from '../../api/fetchItem'

export const fetchStories = () => async (dispatch) => {
  dispatch({ type: FETCH_STORIES_REQUEST })

  try {
    const { data } = await hackerNews.get('/newstories.json')

    const stories = await Promise.all(data.slice(0, 100).map(async (storyId) => {
      const { data: { id, title, score, by, time } } = await fetchItem(storyId)
      return { id, title, score, by, time }
    }))

    dispatch({
      type: FETCH_STORIES_SUCCESS,
      payload: stories
    })
  } catch (error) {
    dispatch({
      type: FETCH_STORIES_FAIL,
      payload: error.message
    })
  }
}

export const fetchStory = (id) => async (dispatch) => {
  dispatch({ type: FETCH_STORY_REQUEST })

  try {
    const { data: { title, url, time, by, text, kids } } = await fetchItem(id)

    dispatch({
      type: FETCH_STORY_SUCCESS,
      payload: { id, title, url, time, by, text, kids }
    })
  } catch (error) {
    dispatch({
      type: FETCH_STORY_FAIL,
      payload: error.message
    })
  }
}