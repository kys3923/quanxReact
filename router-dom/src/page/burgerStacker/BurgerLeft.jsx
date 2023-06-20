const BurgerLeft = ({items, setSelectedIngredients}) => {

  const addBurgerIngredients = (e, obj) => {
    e.preventDefault()
    setSelectedIngredients((prev) => ([
      ...prev,
      obj
    ]))
  }

  return (
    <div className="leftContainer">
      <ul>
        {items && items.map((item, i) => {
          return <li 
            key={i} 
            style={{ display: "block", backgroundColor: item.color, padding: '.5em 2em'}}
            onClick={(e) => addBurgerIngredients(e, item)}
            >
              {item.name}
            </li>
        })}
      </ul>
    </div>
  );
}
export default BurgerLeft;