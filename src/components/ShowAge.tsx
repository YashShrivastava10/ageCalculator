import { Age } from "../hooks/useAgeCalculator"

type ShowAgeProps = {
  age: Age | {}
}

export const ShowAge = ({ age }: ShowAgeProps) => {

  const isAgeValid = (obj: any): obj is Age => {
    return 'years' in obj && 'months' in obj && 'days' in obj;
  };

  return (
    <div className='show'>
      <div className='show-years'>
        <span>{isAgeValid(age) ? age.years : "- -"}</span>
        <b>years</b>
      </div>
      <div className='show-years'>
        <span>{isAgeValid(age) ? age.months : "- -"}</span>
        <b>months</b>
      </div>
      <div className='show-years'>
        <span>{isAgeValid(age) ? age.days : "- -"}</span>
        <b>days</b>
      </div>
    </div>
  )
}
