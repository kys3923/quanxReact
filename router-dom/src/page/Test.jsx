import { useLocation } from 'react-router-dom'

const Test = (props) => {

  const location = useLocation()
  
  return (
    <p className='font-bold'>This is Test Page</p>
  );
}
export default Test;