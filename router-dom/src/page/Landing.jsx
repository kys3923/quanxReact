import { useNavigate } from "react-router-dom";
import { useState } from 'react'

const Landing = (props) => {

  const navigate = useNavigate()
  const [ sampleData, setSampleData ] = useState({
    name: 'test'
  })

  const MoveRoute = (e) => {
    e.preventDefault()
    navigate('/test', {state: sampleData})
  }

  return (
    <div>
      <p>This is Landing page</p>
      <button onClick={MoveRoute}>Move</button>
    </div>
  );
}
export default Landing;