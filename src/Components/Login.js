import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    var [username,setusername]=useState("")
    var [password,setpassword]=useState("")
    const subdata=()=>{
        const data={"username":username,"password":password}
        console.log(data)
    }
  return (
    <div>
        <div className="container">
    <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label for="" className="form-label">Username</label>
            <input onChange={(a)=>{setusername(a.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                 <label for="" className="form-label">Password</label>
                 <input onChange={(a)=>{setpassword(a.target.value)}} type="password" name="" id="" class="form-control"/>

            </div>
             <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
               <button onClick={subdata} className="btn btn-success">Login</button>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <Link to="/register">New user click here</Link>
                
                
           </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Login