import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    var [name,setname]=useState("")
    var [email,setemail]=useState("")
    var [password,setpassword]=useState("")
    var [confirmpassword,setconfirmpassword]=useState("")
    const subdata=()=>{
        const data={"name":name,"email":email,"password":password,"confirmpassword":confirmpassword}
        console.log(data)
    }
    
  return (
    <div>

<div className="container">
    <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label for="" className="form-label">Name</label>
            <input onChange={(a)=>{setname(a.target.value)}}  type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label for="" className="form-label">Email</label>
            <input onChange={(a)=>{setemail(a.target.value)}} type="email" name="" id="" class="form-control"/>
           </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                 <label for="" className="form-label">Password</label>
                 <input onChange={(a)=>{setpassword(a.target.value)}} type="password" name="" id="" class="form-control"/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                 <label for="" className="form-label">Confirm password</label>
                 <input onChange={(a)=>{setconfirmpassword(a.target.value)}} type="password" name="" id="" class="form-control"/>
            </div>
             <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               <button onClick={subdata} className="btn btn-success">REGISTER</button>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <Link to="/"><button className="btn-info">BACK TO LOGIN</button></Link>
           </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Register