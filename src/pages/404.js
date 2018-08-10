import React from 'react'

import { Link } from 'gatsby'

const NotFoundPage = () => (
  <div>
    <h1>Oops </h1>
    <p>Sad, sad, sad...... I know you did not mean to, but things happen.</p>
    <p>
      Never mind, there is always a{' '}
      <button
        role="button"
        aria-label="Home"
        href="#flat-buttons"
        variant="raised"
        color="primary"
        component={Link}
        to="/"
      >
        Home
      </button>{' '}
      for everyone
    </p>
  </div>
)

export default NotFoundPage
