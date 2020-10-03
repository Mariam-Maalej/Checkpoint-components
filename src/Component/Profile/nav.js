import React from 'react';
function Navbar(){
    return (
        <div className='containernav'>
<nav className="navbar navbar-light bg-light" style={{display:'flex', justifyContent:'left'}}>
  <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-person-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path fillRule="evenodd" d="M2 15v-1c0-1 1-4 6-4s6 3 6 4v1H2zm6-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
   <h4>User Profile</h4> 
   <form className="form-inline" style={{ paddingLeft: '600px'}}>
      <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
      <button type="button" className="btn btn-info" >Search</button>
    </form>
</nav>
</div>
    );
};
export default Navbar;