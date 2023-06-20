import { useLocation } from 'react-router-dom'

const Test = (props) => {

  const location = useLocation()

  console.log(location.state)
  return (
    <p>This is Test Page</p>
  );
}
export default Test;