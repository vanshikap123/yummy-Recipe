import { useContext } from "react"
import { Link } from "react-router-dom"
import SearchContext from "../context/SearchContext"


const Navbar=() => {
let ctx= useContext(SearchContext)
console.log(ctx)
const handleitem=(ans)=>{
ctx.setSearchItem(ans)
}

    return(
<div className="">
<nav className="navbar navbar-expand-lg text-primary-emphasis  rounded-3  d-flax g-2 w-75 m-auto mt-5 shadow-lg border border-success">
  <div className="container ps-2">
    <Link className="navbar-brand text-primary fw-bolder fs-3 fst-italic " to="/">
    </Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-5  mb-2 mb-lg-0 p-1 d-flax gap-5 text-white">
        <li className="nav-item">
          <Link onClick={()=>handleitem('All')} className="nav-link active" aria-current="page" to="">All</Link>
        </li>
        <li className="nav-item">
          <Link onClick={()=>handleitem('Pizza')} className="nav-link active" aria-current="page" to="">Pizza</Link>
        </li>
        <li onClick={()=>handleitem('Dessert')} className="nav-item">
          <Link className="nav-link " to=''>Dessert</Link>
        </li>
        <li onClick={()=>handleitem('Indian')} className="nav-item">
          <Link className="nav-link " to=''>Indian</Link>
        </li>
        <li onClick={()=>handleitem('Shakes')} className="nav-item">
          <Link className="nav-link " to=''>Shakes</Link>
        </li>
        <li onClick={()=>handleitem('Biryani')} className="nav-item">
          <Link className="nav-link " to=''>Biryani</Link>
        </li>
        <li onClick={()=>handleitem('Salad')} className="nav-item">
          <Link className="nav-link " to=''>Salad</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

</div>
    )
}

export default Navbar;