import { useState } from 'react'

export const useAgeCalculator = () => {
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
  
  return { handleSubmit, dayError, monthError, yearError, age }
}
