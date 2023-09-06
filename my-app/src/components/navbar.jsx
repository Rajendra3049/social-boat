import React from 'react';

function Navbar({searchQuery,
  setSearchQuery}) {
  return (
    <div className='bg-dark text-white py-3 mb-2'>
  <div className='container'>
    <div className='d-flex justify-content-between align-items-center flex-wrap'>
      <div className='d-flex align-items-center text-white fs-2 fw-bold  '>
        Social Boat
      </div>
      <div className='d-flex align-items-center col-lg-5 col-md-7 col-12 '>
        <div className='search-box d-flex align-items-center flex-grow-1 me-3'>
          <input
            type='search'
            className='form-control'
            placeholder='Search'
            value={searchQuery}
            onInput={(e) => { setSearchQuery(e.target.value) }}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div style={{width:"60px"}}>
        <img className='img-fluid rounded-circle ' src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Navbar;
