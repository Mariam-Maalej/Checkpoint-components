import React from'react';
function footer(){
    return (
       
<div className="container" style={{borderTop:'solid darkgray'}} >
<div className="row" style={{textAlign:'center'}}>
  <div className="col-sm-4">
    <p>Facebook</p>
    <a href="https://www.facebook.com"
        className="facebooksocial">
       <i className="fab fa-facebook-square"></i>
      </a>
  </div>
  <div className="col-sm-4">
    <p>Youtube</p>
    <a href="https://www.youtube.com"
        className="youtubesocial">
       <i className="fab fa-youtube"></i>
      </a>
  </div>
  <div className="col-sm-4">
    <p>Instagram</p>        
    <a href="https://www.instagram.com"
        className="instagramsocial">
       <i className="fab fa-instagram"></i>
      </a>
  </div>
</div>
</div>
    );
};
export default footer;
