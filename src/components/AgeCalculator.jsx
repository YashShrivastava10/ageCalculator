import { ThemeSelector } from './ThemeSelector';
import { Form } from './Form';
import { ShowAge } from './ShowAge';
import { useAgeCalculator } from '../hooks/useAgeCalculator';

export const AgeCalculator = () => {

  const { handleSubmit, dayError, monthError, yearError, age } = useAgeCalculator()

  return (
    <div className='container'>
      <div className='calculator-container'>

        <ThemeSelector />

        <Form handleSubmit={handleSubmit} dayError={dayError} monthError={monthError} yearError={yearError}/>

        <ShowAge age={age}/>
        
      </div>
    </div>
  );
}

export default AgeCalculator;