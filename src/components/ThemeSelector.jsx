import React from 'react'
import { handleToggle } from '../helper'

export const ThemeSelector = () => {
  return (
    <div className='toggle'>
      <input type="checkbox" id="switch" onChange={handleToggle} />
      <label htmlFor="switch">Toggle</label>
    </div>
  )
}
