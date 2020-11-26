import React, { useEffect } from 'react'
import useInterval from '../../hooks/useInterval'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStories } from '../../store/story/actions'
import Story from '../../components/Story/Story'
import Button from '../../components/Button/Button'

import styles from './StoriesScreen.module.scss'

const StoriesScreen = () => {
  const { loading, error, entities } = useSelector(({ stories }) => stories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchStories())
  }, [])

  useInterval(() => dispatch(fetchStories()), entities.length ? 60 * 1000 : null)

  const onReloadStoriesButtonClick = () => {
    dispatch(fetchStories())
  }

  const renderStories = () => {
    if (loading) {
      return <p>Loading...</p>
    }

    if (error) {
      return <p>Sorry, an error has occurred on the website</p>
    }

    return (
      <>
        <Button
          type="button"
          text="Reload Stories"
          onClick={onReloadStoriesButtonClick}
          className={styles.reloadStoriesButton}
        />
        <ol>
          {entities.map((story) => <Story key={story.id} {...story} />)}
        </ol>
      </>
    )
  }

  return (
    <>
      <h1 className="visually-hidden">Stories page</h1>
      {renderStories()}
    </>
  )
}

export default StoriesScreen
