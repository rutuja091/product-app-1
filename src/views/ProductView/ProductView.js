import "./ProductView.css"

import Products  from"../../data"
import { useParams } from "react-router-dom"
function ProductView() {
    const{id}=useParams()
    const selectedBlog=Products.find((blogObject)=>blogObject.id===id )

    console.log(selectedBlog)  
  return (
    <div className="card">
      <img src={selectedBlog.productImg}alt="product-img"className="product-img"/>
      <h1 className="title">{selectedBlog.title}</h1>
     
      <div className="product-content">
      {selectedBlog.content}
      </div>
    </div>
  )
}

export default ProductView
