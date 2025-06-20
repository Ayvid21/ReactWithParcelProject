const User = ({name, location, contact}) => {
  return (
    <div className="user-container">
        <h2>Name: {name}</h2>
        <h3>Address: {location}</h3>
        <h3>Contact: {contact}</h3>
    </div>
  )
}

export default User;