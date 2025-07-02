import { useState } from 'react';


const User = ({ name, location, contact }) => {
  const [count, setCount] = useState(0);

  const IncreaseCount = () => {
    return setCount(count + 1);
  }

  const DecreaseCount = () => {
    return setCount(count - 1);
  }

  const ResetCount = () => {
    return setCount(0);
  }


  return (
    <div className="user-container">
      <button onClick={() => IncreaseCount()} > + </button>
      <h1>Count: {count}</h1>
      <button onClick={() => DecreaseCount()} > - </button>
      <button onClick={() => ResetCount()} >Reset</button>
      <h2>Name: {name}</h2>
      <h3>Address: {location}</h3>
      <h3>Contact: {contact}</h3>
    </div>
  )
}

export default User;