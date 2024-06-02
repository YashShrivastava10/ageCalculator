import { useAgeCalculator } from "../hooks/useAgeCalculator";
import { Form } from "./Form";
import { ShowAge } from "./ShowAge";
import { ThemeSelector } from "./ThemeSelector";

export const AgeCalculator = () => {

  const { handleSubmit, error, age } = useAgeCalculator()

  return (
    <div className='container'>
      <div className='calculator-container'>

        <ThemeSelector />

        <Form handleSubmit={handleSubmit} error={error} />

        <ShowAge age={age}/>
        
      </div>
    </div>
  );
}

export default AgeCalculator;