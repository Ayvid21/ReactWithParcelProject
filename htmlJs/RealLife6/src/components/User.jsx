/* eslint-disable react/prop-types */
// import React from 'react';

const User = ({ fullName }) => {
  return (
    <div className='bg-black text-white'>
      <h2>{fullName}</h2>
    </div>
  );
};

export default User;