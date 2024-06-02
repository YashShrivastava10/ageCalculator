import React from 'react'

export const ShowAge = ({ age }) => {
  return (
    <div className='show'>
      <div className='show-years'>
        <span>{Object.keys(age).length > 0 ? age.years : "- -"}</span>
        <b>years</b>
      </div>
      <div className='show-years'>
        <span>{Object.keys(age).length > 0 ? age.months : "- -"}</span>
        <b>months</b>
      </div>
      <div className='show-years'>
        <span>{Object.keys(age).length > 0 ? age.days : "- -"}</span>
        <b>days</b>
      </div>
    </div>)
}
