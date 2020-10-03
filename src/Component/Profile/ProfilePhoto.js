import React from 'react';
import profilePic from "../Profile/profilepic.jpg";
function ProfilePhoto(){
    return (
        <div style={{textAlign:'right'}}>
            <img src={profilePic} alt='ProfilePicture' style={{ width:'250px', borderStyle:'white', borderRadius:'15px'}}/>
        </div>
    );
};
export default ProfilePhoto;