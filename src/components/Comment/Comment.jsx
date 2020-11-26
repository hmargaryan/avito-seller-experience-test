import React, { useState } from 'react'
import convertTime from '../../utils/convertTime'
import fetchItem from '../../api/fetchItem'

import styles from './Comment.module.scss'

const Comment = ({ id, by, time, text, kids }) => {
  const [comments, setComments] = useState([])
  const [areCommentsLoaded, setAreCommentsLoaded] = useState(false)
  const [areCommentsOpened, setAreCommentsOpened] = useState(false)

  const fetchComments = async () => {
    try {
      const data = await Promise.all(kids.map(async (commentId) => {
        const { data: { id, by, text, time, kids } } = await fetchItem(commentId)
        return { id, by, text, time, kids }
      }))

      setComments(data)
      setAreCommentsLoaded(true)
    } catch(error) {
      console.error(error.message)
    }
  }

  const onToggleCommentsButtonClick = () => {
    kids && fetchComments()
    setAreCommentsOpened((prevAreCommentsOpened) => !prevAreCommentsOpened)
  }

  return (
    <li className={styles.comment}>
      <div className={styles.mainComment}>
        {/* Did some checks because there are no required properties according to the API (except "id") */}
        <p className={styles.metaData}>{time && `at ${convertTime(time)}`} {by && `by ${by}`}</p>
        {/* Used "dangerouslySetInnerHTML" because "entities.text" is a HTML string */}
        <p dangerouslySetInnerHTML={{ __html: text || 'No comment' }} className={styles.text} />
        {kids && (
          <button
          type="button"
          style={{transform: areCommentsOpened && 'rotate(180deg)'}}
          className={styles.toggleCommentsButton}
          onClick={onToggleCommentsButtonClick}
          >
          </button>
        )}
      </div>
      {areCommentsLoaded && areCommentsOpened && (
        <ol className={styles.comments}>
          {comments.map((comment) => <Comment key={comment.id} {...comment} />)}
        </ol>
      )}
    </li>
  )
}

export default Comment
