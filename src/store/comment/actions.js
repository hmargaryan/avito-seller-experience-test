import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAIL
} from './types'
import fetchItem from '../../api/fetchItem'

export const fetchComments = (id) => async (dispatch) => {
  dispatch({ type: FETCH_COMMENTS_REQUEST })

  try {
    const { data: { kids } } = await fetchItem(id)

    const comments = kids
      ? await Promise.all(kids.map(async (commentId) => {
        const { data: { id, by, text, time, kids } } = await fetchItem(commentId)
        return { id, by, text, time, kids }
      }))
      : []

    dispatch({
      type: FETCH_COMMENTS_SUCCESS,
      payload: comments
    })
  } catch (error) {
    dispatch({
      type: FETCH_COMMENTS_FAIL,
      payload: error.message
    })
  }
}