import { useState } from 'react';

export const useAgeCalculator = () => {
  const [age, setAge] = useState({});
  const [error, setError] = useState({ dayError: false, monthError: false, yearError: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const { day, month, year } = formData;

    setError({ dayError: false, monthError: false, yearError: false });

    if (!day || !month || !year) {
      setError({
        dayError: !day,
        monthError: !month,
        yearError: !year,
      });
      return;
    }

    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();

    if (birthDate > currentDate) {
      setError({ dayError: false, monthError: false, yearError: true });
      return;
    }

    let newYear = currentDate.getFullYear() - birthDate.getFullYear();
    let newMonth = currentDate.getMonth() - birthDate.getMonth();
    let newDay = currentDate.getDate() - birthDate.getDate();

    if (newDay < 0) {
      newMonth -= 1;
      newDay += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (newMonth < 0) {
      newYear -= 1;
      newMonth += 12;
    }

    setAge({ years: newYear, months: newMonth, days: newDay });
  };

  return { handleSubmit, error, age };
};
