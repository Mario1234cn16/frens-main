import React, { useMemo, useEffect } from 'react';
import '../styles/ProfileButton.css';


function ProfileButton(){
    return (<button onClick={function(e) {
        let publicKeyCheckProfile = sessionStorage.getItem("publicKeySession");
        try {
            var test = publicKeyCheckProfile.length;
            window.location.href = '/profilepage';
        }
        catch(err){
            alert("Please connect your wallet.");
        }
        
    }} id = "goToProfileButton">Profile</button>);
}

export default ProfileButton;