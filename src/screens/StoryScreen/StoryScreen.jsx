import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStory } from '../../store/story/actions'
import convertTime from '../../utils/convertTime'
import Button from '../../components/Button/Button'
import Comments from '../../components/Comments/Comments'

import styles from './StoryScreen.module.scss'

const StoryScreen = ({ match: { params: { id } } }) => {
  const { loading, loaded, error, entities } = useSelector(({ story }) => story)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchStory(id))
  }, [])

  const renderStory = () => {
    if (loading) {
      return <p>Loading...</p>
    }

    if (loaded && !entities?.id) {
      return <p>Story not found</p>
    }

    if (error) {
      return <p>Sorry, an error has occurred on the website</p>
    }

    return (
      <>
        {/* Did some checks because there are no required properties according to the API (except "id") */}
        <h1 className={styles.title}>{entities.title || `Story ${id}`}</h1>
        {entities.url && <a href={entities.url} target="_blank" className={styles.storyLink}>Story link</a>}
        <p className={styles.metaData}>{entities.time && `at ${convertTime(entities.time)}`} {entities.by && `by ${entities.by}`}</p>
        {/* Used "dangerouslySetInnerHTML" because "entities.text" is a HTML string */}
        <p dangerouslySetInnerHTML={{ __html: entities.text || 'Sorry, there is no story text' }} className={styles.text} />
        <Comments storyId={id} />
      </>
    )
  }

  return (
    <>
      <Button to="/" text="Go back" className={styles.goBackButton}/>
      {renderStory()}
    </>
  )
}

export default StoryScreen
