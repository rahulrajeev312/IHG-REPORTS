import React, { useState } from "react";
import '../App.css';
import { useHistory } from "react-router-dom";
import { FaUserAlt } from 'react-icons/fa';
import { BsFillLockFill } from "react-icons/bs";
import { render } from "@testing-library/react";


function Login() {
    const history = useHistory();
  const [username,setusername] = useState("");
  const [pwrd,setpwrd]= useState("");
  const onclick1 = () => {

  console.log (username,pwrd)
  if(username === "admin"  && pwrd === "password") {
    history.push("/report");
  }
  else
{
alert("invlaid username")
}

    
  }
    const name1 = (a) => {
      console.log (a.target.value)
      setusername (a.target.value)
      
  }
  const name2 = (a) => {
    console.log (a.target.value)
    setpwrd (a.target.value)
  
    
}
  return (
<div className="all"> 

   <div className="container">
<a href>
  <img className="logo" alt="inspiredholding group" title="logo" src="https://www.inspiredholding.com/assets/img/ihg-brands-logo.svg">
  
  </img>
</a>
  <nav>
<a href="#">Home</a>
<a href="#">About</a>
<a href="#">Contact</a>
</nav>
</div>
<div className="login-form">
  <div className="login-form-inner">
    <h1>Login</h1>
<div className="input">
  
<label for="uid"><FaUserAlt /></label>
<input type="text" id="uid" value= {username} onChange= {name1} placeholder="username"/>


</div>
<div className="input">
<label for="psd"><BsFillLockFill/></label> 
<input type="password" id="psd" value={pwrd} onChange={name2} placeholder="password"/>
</div>

<button className="login-bt" onClick = {onclick1}>
   submit
 </button>
</div>
</div>
<div className ="images">
  <div className="imagebuttons">
    <image src="https://www.pngarea.com/pngs/101/7200973_contact-icon-png-simpler-contacts-png-download.png"></image>
  </div>

  </div>


</div> 

    
    
  );
}

export default Login;
