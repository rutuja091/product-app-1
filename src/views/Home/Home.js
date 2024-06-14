import "./Home.css"
import blogs from "./../../data"
import ProductCard from "../../components/ProductCard/ProductCard"
function Home() {
  console.log(blogs)
  return (
    <>
     <h1 className="heading">Product  Cards</h1>
     <div className="blogs-container">
    
    {
      blogs.map((blogObject,i)=>{
        const{
          id,
          title,
          content,
          author,
          date,
          categories
        }=blogObject
     
        return(
          <ProductCard
          key={i}
          id={id}
          title={title}
          content={content}
          author={author}
          date={date}
          categories={categories}
          />
        )
      })
    }
    </div>
    </>
  )
}

export default Home
