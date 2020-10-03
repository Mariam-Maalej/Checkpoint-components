import React from 'react';
function Info(){
return (
<div className="container" style={{display:'flex', justifyContent:'space-around'}}>
  <div className="info" >
    <h3>Interests</h3>
    <i class="far fa-lightbulb"></i>
    <label>Sports, Photography, arts</label>
  </div>
  <div className="info">
    <h3>Get in touch</h3>   
    <i class="fas fa-envelope-open-text"></i>     
    <label>myemail@example.com</label>
  </div>
</div>
);
};
export default Info;