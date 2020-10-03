import React from 'react';
import './App.css';
import Navbar from './Component/Profile/nav';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Address from './Component/Profile/Address';
import Info from './Component/Profile/info';
import Footer from './Component/Profile/footer';
function App() {
  return (
    <div className="App">
      <div className='container'>
      <Navbar/>
      <br></br>
      <div className='globalinfo'>
      <FullName/>
      <ProfilePhoto/> 
      <Address/>
      </div>
      <br></br>
      </div>
      <br></br>
      <Info/>
      <br></br>
      <br></br>
      <Footer/>
    </div>
  );
}
export default App;
