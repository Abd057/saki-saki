import React,{useState} from "react"
import './Log.css'

import { FaRegUserCircle } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
function Log(){

const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
return(
    <div className='log'>
       
        <form action="">
            <h1></h1>
            <div className="input1">
                <input type="text"placeholder='USER NAME'/>
                <FaRegUserCircle />
            </div>

            <div className="input2">
                <input type="password"placeholder='PASSWORD'/>
                <TbLockPassword />
            </div>
           <div className="forget">
             <a href='#'>Forgot Password?</a>
           </div>
          <button type="submit">LOG IN</button>
           <div className="regi">
             <p>Don't Have Any Account?</p> 
             <a href="#">Register</a>
           </div>
        </form>

    </div>
);


};
export default Log;