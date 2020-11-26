import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.headerTitle}>HackerNews</NavLink>
      <p className={styles.headerSubtitle}>avito trainee task</p>
    </header>
  )
}

export default Header
