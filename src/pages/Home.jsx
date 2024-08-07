import { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchContext from "../context/SearchContext";
import About from "../pages/About"


const Home=()=>{ 
    let store= useContext(SearchContext)
   let searchItem = store.searchItem
  const [user,setuser]= useState(1)
  // console.log(user)
  let itemPerPage = 8;
  let lastIndex = user * itemPerPage
  let firstIndex = lastIndex - itemPerPage;


    const [item, setitem] = useState([]);
let noOfButton =  Math.ceil(item.length / itemPerPage)
let ButtonArr =[...Array(noOfButton + 1).keys()].slice(1)
// console.log(ButtonArr)

let filteredArr = item.filter((dish)=>dish.tags.includes(searchItem))
console.log(filteredArr)
let slicedArr
if(filteredArr.length){
  slicedArr = filteredArr.slice(firstIndex,lastIndex)
console.log(slicedArr)
}else{
   slicedArr = item.slice(firstIndex,lastIndex)
console.log(slicedArr)
}

    async function fetchdata(){
        let res= await fetch('https://dummyjson.com/recipes?skip=0&limit=100')
        let data= await res.json()
      
        setitem(data.recipes)
    }
    useEffect(()=>{
        fetchdata()
    },[store.searchItem])
    // console.log(item)
    const handleincrement = ()=>{
      if (user < ButtonArr.length) {
        setuser(user + 1)
      }
    }
    const handledecrement = ()=>{
      if (user > 1) {
        setuser(user - 1)
      }
    }


return(
  <div className='container-fluid'>
    <div className=" background">
      <div className="center ">
        <h1 className=" fs-1 text-center ">Yummy Recipies</h1>
<p className="text-center fs-4 fw-5">Click on button open the recipe website and try to cook any recipe, choice your favourite foods you like junk foods you also seen many recipe for junk food and healthy foods...  </p>
<button className="btnnn"><Link to='https://www.yummly.com/'>Views Recipies</Link></button>
</div>

    </div>
   <div>
   <Navbar/>
   <About/>
   </div>
   <h1 className="text-center">My Recipes</h1>
   <div className="divider"></div>
   <div className="divid2"></div>

   <div className='row d-flex justify-content-center m-auto gap-3 mt-5'>
  
{slicedArr.map((ele)=>{
    return<div className="card p-3 border border-success hover1  " style={{width: '20rem', height:'500px'}}>
  <img src={ele.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-truncate text-center fst-italic text-success">{ele.name}</h5>
    <div className="card-text text-center fst-italic text-success"> <h6>Rating</h6>  {ele.rating} <img src="https://th.bing.com/th/id/R.f5c5e72ff064c056eb9fec4f77938205?rik=NTtahhbp2DhPww&riu=http%3a%2f%2fwww.choosito.com%2fblog%2fen%2fwordpress%2fwp-content%2fuploads%2f2011%2f12%2fevaluation-stars.png&ehk=KllaRBYB%2f7DwQMQFOdzMCa2x5k2cF0EKj4lMxeIvvnw%3d&risl=&pid=ImgRaw&r=0" className="w-25" alt="" srcSet="" />
    </div>
    <Link state={ele} to='/single' className="btn btn-outline-success  button ">View Recipe</Link>
  </div>
</div>
})}
   </div>
   <nav aria-label="Page navigation example">
  <ul className="pagination mt-5 d-flex justify-content-center ">
    <li onClick={handleincrement} className="page-item"><Link className="page-link" href="#">Previous</Link></li>
    {ButtonArr.map((ele,index) => {
                return <li key={index} onClick={() => setuser(ele)} className={user===ele?"page-item active":"page-item"}><Link className="page-link" to="#">{ele}</Link></li>
              })}

    <li  onClick={handledecrement} className="page-item"><Link className="page-link" href="#">Next</Link></li>
  </ul>
</nav>

   </div>
)
}
export default Home;