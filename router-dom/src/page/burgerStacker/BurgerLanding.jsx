import BurgerLeft from "./BurgerLeft";
import BurgerRight from "./BurgerRight";
import './style.css'
import { Items } from "./data";
import { useState } from 'react'

const BurgerLanding = (props) => {

  const [ selectedIngredients, setSelectedIngredients ] = useState([])

  return (
    <section>
      <BurgerLeft items={Items} setSelectedIngredients={setSelectedIngredients} />
      <BurgerRight selectedIngredients={selectedIngredients} setSelectedIngredients={setSelectedIngredients} />
    </section>    
  );
}
export default BurgerLanding;