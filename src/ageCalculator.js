import React, { useState } from 'react';

function AgeCalculator() {
  const [age, setAge] = useState({})
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target))
    const { day, month, year } = formData
    if (Object.values(formData).some((value) => value !== "")) {
      setError(false)
      let currentDate = new Date()
      const currentDay = currentDate.getDay()
      const currentMonth = currentDate.getMonth()
      const currentYear = currentDate.getFullYear()

      let newYear = currentYear - year;
      let newMonth = currentMonth - month;
      let newDay = currentDay - day;

      if (newDay < 0) {
        newMonth -= 1;
        const monthDays = new Date(currentYear, currentMonth - 1, 0).getDate();
        newDay = monthDays + newDay;
      }

      if (newMonth < 0) {
        newYear -= 1;
        newMonth = 12 + newMonth;
      }

      const isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
      };
      if (isLeapYear(year) && month <= 2) {
        newDay += 1;
      }
      const age = { years: newYear, months: newMonth, days: newDay };
      setAge(age)
    }
    else{
      setError(true)
    }
  }

  const handleToggle = () => {
    const elem = document.querySelector("#switch")
    console.log(elem.checked);
    if(elem.checked){
      document.querySelector(".calculator-container").style.background = "white"
      document.querySelector(".show").style.color = "black"
    }
    else if(!elem.checked){
      document.querySelector(".calculator-container").style.background = "black"
      document.querySelector(".show").style.color = "white"
    }
  }
  return (
    <div className='container'>
      <div className='calculator-container'>
        <div className='toggle'>
          <input type="checkbox" id="switch" onChange={handleToggle}/>
          <label htmlFor="switch">Toggle</label>
        </div>
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <div className='first-row'>
            <div className='day'>
              <label htmlFor='day'>DAY</label>
              <input id='day' name='day' placeholder='DD'></input>
              {error && <span>This field is required.</span>}
            </div>
            <div className='month'>
              <label htmlFor='month'>MONTH</label>
              <input id='month' name='month' placeholder='MM'></input>
              {error && <span>This field is required.</span>}
            </div>
            <div className='year'>
              <label htmlFor='year'>YEAR</label>
              <input id='year' name='year' placeholder='YYYY'></input>
              {error && <span>This field is required.</span>}
            </div>
          </div>
          <div className='button'>
            <hr />
            <button type='submit'>
              <img src="./icon-arrow.svg" alt=""></img>
            </button>
          </div>
        </form>
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
        </div>
      </div>
    </div>
  );
}

export default AgeCalculator;