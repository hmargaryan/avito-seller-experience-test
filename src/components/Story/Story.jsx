import React from 'react'
import { NavLink } from 'react-router-dom'
import renderEnding from '../../utils/renderEnding'
import convertTime from '../../utils/convertTime'

import styles from './Story.module.scss'

const Story = ({ id, title, score, by, time }) => {
  return (
    <li className={styles.story}>
      <NavLink to={`/story/${id}`}>
        {/* Did some checks because there are no required properties according to the API (except "id") */}
        <h2 className={styles.title}>{title || `Story ${id}`}</h2>
        <p className={styles.metaData}>{score && `${score} ${renderEnding(score, 'point')}`} {by && `by ${by}`}</p>
        <p className={styles.metaData}>{time && convertTime(time)}</p>
      </NavLink>
    </li>
  )
}

export default Story
