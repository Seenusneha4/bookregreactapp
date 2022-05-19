import React, { useState } from 'react'
import Header from './Header'

const Addbook = () => {
    var [bookname,setbookname]=useState("")
    var [author,setauthor]=useState("")
    var [price,setprice]=useState("")
    const subdata=()=>{
        const data={"bookname":bookname,"author":author,"price":price}
        console.log(data)
    }
    
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label for="" className="form-label">Book name</label>
            <input onChange={(a)=>{setbookname(a.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label for="" className="form-label">Author</label>
            <input onChange={(a)=>{setauthor(a.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label for="" className="form-label">Price</label>
            <input onChange={(a)=>{setprice(a.target.value)}}  type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               <button onClick={subdata} className="btn btn-success">SUBMIT</button>
            </div>
           
        </div>
    </div>
</div>
    </div>
  )
}

export default Addbook