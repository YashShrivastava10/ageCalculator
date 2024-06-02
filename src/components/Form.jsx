import React from 'react'

export const Form = ({ handleSubmit, dayError, monthError, yearError }) => {
  return (
    <form onSubmit={(e) => { handleSubmit(e) }}>
      <div className='first-row'>
        <div className='day'>
          <label htmlFor='day'>DAY</label>
          <input id='day' min="1" max="31" type="number" inputMode="numeric" name='day' placeholder='DD'></input>
          {dayError && <span>This field is required.</span>}
        </div>
        <div className='month'>
          <label htmlFor='month'>MONTH</label>
          <input id='month' min="1" max="12" type="number" inputMode="numeric" name='month' placeholder='MM'></input>
          {monthError && <span>This field is required.</span>}
        </div>
        <div className='year'>
          <label htmlFor='year'>YEAR</label>
          <input id='year' min="1" max="2023" type="number" inputMode="numeric" name='year' placeholder='YYYY'></input>
          {yearError && <span>This field is required.</span>}
        </div>
      </div>
      <div className='button'>
        <hr />
        <button type='submit'>
          <img src="../icon-arrow.svg" alt=""></img>
        </button>
      </div>
    </form>
  )
}
