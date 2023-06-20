const BurgerRight = ({selectedIngredients, setSelectedIngredients}) => {

  const clearStack = (e) => {
    e.preventDefault()
    setSelectedIngredients([])
  }
  return (
    <div className="rightContainer">
      {selectedIngredients ?
        selectedIngredients.map((item, i) => {
          return <p 
            key={i + 10000}
            style={{ display: 'block', backgroundColor: item.color, padding: '.5em 2em'}}
          >
            {item.name}
          </p>
        })
        :
        <p>No indredients added</p>
      }
      <button onClick={clearStack}>Clear Stack</button>
    </div>
  );
}
export default BurgerRight;