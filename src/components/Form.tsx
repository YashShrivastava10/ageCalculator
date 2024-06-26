import { Error } from "../hooks/useAgeCalculator"

type FormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  error: Error
}

type FormFieldProps = {
  name: string,
  min: string,
  max: string | number,
  placeholder: string,
  error: boolean,
}

const FormFields = ({ name, min, max, placeholder, error }: FormFieldProps) => {
  return (
    <>
      <label htmlFor={name}>DAY</label>
      <input id={name} min={min} max={max} type="number" inputMode="numeric" name={name} placeholder={placeholder} />
      {error && <span>This field is required.</span>}
    </>
  )
}

export const Form = ({ handleSubmit, error }: FormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='first-row'>

        <div className='day'>
          <FormFields name="day" min="1" max="31" placeholder="DD" error={error.dayError} />
        </div>

        <div className='month'>
          <FormFields name="month" min="1" max="12" placeholder="MM" error={error.monthError} />
        </div>

        <div className='year'>
          <FormFields name="year" min="1" max={new Date().getFullYear()} placeholder="YYYY" error={error.yearError} />
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
