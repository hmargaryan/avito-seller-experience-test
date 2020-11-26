import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchComments } from '../../store/comment/actions'
import useInterval from '../../hooks/useInterval'
import renderEnding from '../../utils/renderEnding'
import Button from '../Button/Button'
import Comment from '../Comment/Comment'

import styles from './Comments.module.scss'

const Comments = ({ storyId }) => {
  const { loading, loaded, error, entities } = useSelector(({ comments }) => comments)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchComments(storyId))
  }, [])

  useInterval(() => dispatch(fetchComments(storyId)), entities.length ? 60 * 1000 : null)

  const onCommentReloadButtonClick = () => {
    dispatch(fetchComments(storyId))
  }

  const renderComments = () => {
    if (loading) {
      return <p>Loading comments...</p>
    }

    if (loaded && !entities?.length) {
      return <p>No comments</p>
    }

    if (error) {
      return <p>Sorry, an error has occurred on the website during comments loading</p>
    }

    return (
      <>
        <div className={styles.commentsHeader}>
          <p className={styles.commentsCount}>{entities.length} {renderEnding(entities.length, 'comment')}</p>
          <Button type="button" text="Reload comments" onClick={onCommentReloadButtonClick} />
        </div>
        <ol>
          {entities.map((comment) => <Comment key={comment.id} {...comment} />)}
        </ol>
      </>
    )
  }

  return (
    <div className={styles.commentsContainer}>
      {renderComments()}
    </div>
  )
}

export default Comments
