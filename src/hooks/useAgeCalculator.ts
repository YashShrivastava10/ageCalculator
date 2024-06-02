import { useState } from 'react';

export type Error = {
  dayError: boolean,
  monthError: boolean,
  yearError: boolean,
};

export type Age = {
  years: number,
  months: number,
  days: number,
};

export const useAgeCalculator = () => {

  const [age, setAge] = useState<Age | {}>({});
  const [error, setError] = useState<Error>({ dayError: false, monthError: false, yearError: false });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formData = Object.fromEntries(new FormData(form)) as Record<string, FormDataEntryValue>;
    const { day, month, year } = formData as { day: string, month: string, year: string };

    setError({ dayError: false, monthError: false, yearError: false });

    if (!day || !month || !year) {
      setError({
        dayError: !day,
        monthError: !month,
        yearError: !year,
      });
      return;
    }

    const birthDate = new Date(Number(year), Number(month) - 1, Number(day));
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
