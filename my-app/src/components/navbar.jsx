import React from 'react';

function Navbar({searchQuery,
  setSearchQuery}) {
  return (
    <div className='bg-dark text-white py-3 mb-2'>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className=' d-flex align-items-center text-white'>
          Your Logo
            </div>
          <div className='d-flex align-items-center justify-content-around col-3'>
            <div className='search-box d-flex align-items-center'>
              <input
                type='search'
                className='form-control'
                placeholder='Search'
                value={searchQuery}
                onInput={(e)=>{setSearchQuery(e.target.value)}}
              />
            </div>
            <div className=' d-flex align-items-center text-white'>
                Profile
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
