import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

import styles from './Button.module.scss'
import PropTypes from 'prop-types'

const Button = ({ type, to, text, onClick, className }) => {
  return (
    type
      ? (
        <button
          type={type}
          onClick={onClick}
          className={classNames(styles.button, className)}
        >
          {text}
        </button>
      )
      : (
        <NavLink
          to={to}
          onClick={onClick}
          className={classNames(styles.button, className)}
        >
          {text}
        </NavLink>
      )
  )
}

Button.propTypes = {
  type: PropTypes.string,
  to: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
}

export default Button
