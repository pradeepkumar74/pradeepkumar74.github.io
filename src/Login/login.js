import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
const navigate=useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userNameChanged = (e) => {
    
    console.log(e.target.value);
    setUserName(e.target.value);
  };

  const passwordNameChanged = (e) => {
    
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const login=()=>{
    if(userName=="pradeep" && password=="123"){
      navigate("/homepage");
    }
    else{
      alert('invalid user');
    }
  }
  const clear=()=>{
    setUserName("");
    setPassword("");
  }

  return (
    <table>
      <thead>
       
        </thead>
     <tbody>
      <tr>
        <td>
          <label>UserName</label>
        </td>
        <td>
          <input type="text" value={userName} onChange={(e)=>userNameChanged(e)}></input>
        </td>
      </tr>
      <tr>
        <td>
          <label>Password</label>
        </td>
        <td>
          <input type="password" value={password} onChange={(e)=>passwordNameChanged(e)}></input>
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <button onClick={()=>login()}>Login</button>
          <button onClick={()=>clear()}>Clear</button>
        </td>
      </tr>
      </tbody>
    </table>
  );
}
export default LoginComponent;
