import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../Header/Header'
import StoriesScreen from '../../screens/StoriesScreen/StoriesScreen'
import StoryScreen from '../../screens/StoryScreen/StoryScreen'

import styles from './App.module.scss'

const App = () => {
  return (
    <Router>
      <Header />
      <main role="main" className={styles.wrapper}>
        <Switch>
          <Route exact path="/" component={StoriesScreen} />
          <Route path="/story/:id" component={StoryScreen} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
