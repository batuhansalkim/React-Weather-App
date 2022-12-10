import React from 'react'


const City = ({city}) => {
  return (
    <div>
      <div className='w-[350px] rounded-md shadow mx-auto'>
        <h1>{city}</h1>
      </div>
    </div>
  );
};

export default City