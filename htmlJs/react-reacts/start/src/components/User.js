import { useState } from 'react';


const User = ({ name, location, contact }) => {

  // useEffect( () => {
  //   // api
  // }, []);

  // async function getUserInfo() {
  //   const data = await 
  // }

  return (
    <div className="user-container">
      <h2>Name: {name}</h2>
      <h3>Address: {location}</h3>
      <h3>Contact: {contact}</h3>
    </div>
  )
}

export default User;