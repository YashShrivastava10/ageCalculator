import React, { useState } from 'react';

function AgeCalculator() {
  const [age, setAge] = useState({})
  const [dayError, setDayError] = useState(false)
  const [monthError, setMonthError] = useState(false)
  const [yearError, setYearError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setDayError(false)
    setMonthError(false)
    setYearError(false)
    const formData = Object.fromEntries(new FormData(e.target))
    const { day, month, year } = formData
    if (Object.values(formData).every((value) => value !== "")) {
      setDayError(false)
      setMonthError(false)
      setYearError(false)
      let currentDate = new Date()
      const currentDay = currentDate.getDay()
      const currentMonth = currentDate.getMonth()
      const currentYear = currentDate.getFullYear()
      if(currentYear < year){
        setYearError(true)
        return
      }
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
      if(!day)
        setDayError(true)
      if(!month)
        setMonthError(true)
      if(!year)
        setYearError(true)
    }
  }

  const handleToggle = () => {
    const elem = document.querySelector("#switch")
    const button = document.querySelector('button');
    if(elem.checked){
      document.querySelector(".calculator-container").style.background = "white"
      document.querySelector(".show").style.color = "black"
      button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = 'black';
      });
      button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = 'hsl(259, 100%, 65%)';
      });
    }
    else if(!elem.checked){
      document.querySelector(".calculator-container").style.background = "black"
      document.querySelector(".show").style.color = "white"
      button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = 'grey';
      });
      button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = 'hsl(259, 100%, 65%)';
      });
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
              {dayError && <span>This field is required.</span>}
            </div>
            <div className='month'>
              <label htmlFor='month'>MONTH</label>
              <input id='month' name='month' placeholder='MM'></input>
              {monthError && <span>This field is required.</span>}
            </div>
            <div className='year'>
              <label htmlFor='year'>YEAR</label>
              <input id='year' name='year' placeholder='YYYY'></input>
              {yearError && <span>This field is required.</span>}
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