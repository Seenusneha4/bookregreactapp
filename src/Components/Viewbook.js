import React from 'react'
import Header from './Header'

const Viewbook = () => {
    var viewlist=[{"bookname":"turning point","author":"APJ","price":"145"},
    {"bookname":"Pride and Prejudice","author":"Jane Austen","price":"128"},
    {"bookname":"Moby-Dick","author":"Herman Melville","price":"167"},
    {"bookname":"War and Peace","author":"Leo Tolstoy","price":"155"},
    {"bookname":"The Red and the Black ","author":"Stendhal","price":"190"}
]
  return (
    <div>
    <Header/>
    <div className="container">
    <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table table-success">
  <thead>
    <tr>
      
      <th scope="col">BOOK NAME</th>
      <th scope="col">Author</th>
      <th scope="col">PRICE</th>
    </tr>
  </thead>
  <tbody>
      {viewlist.map((value,key)=>{return<tr>
   
      
      <td>{value.bookname}</td>
      <td>{value.author}</td>
      <td>{value.price}</td>
    </tr>
    
})} 
  </tbody>
</table>
            </div>
           
           
            
        </div>
    </div>
</div>



    </div>
  )
}

export default Viewbook