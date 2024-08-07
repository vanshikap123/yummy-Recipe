import { useLocation ,Link} from "react-router-dom";

const Singalepage = () => {
    let location = useLocation()
    console.log(location.state)
    return (

        <div className="container-fluid boxes p-3 ">
          <div>
          <div className="row  w-75 m-auto p-3 shadow " style={{ height: "600px" }}>
                <img className="w-100" src={location.state.image} alt="" style={{ height: "590px" }} />

            </div>
            <div className="row mt-3 m-auto w-75  p-3  ">
                <h1 className="text-center text-danger underline ">{location.state.name}</h1>
                <h4 className="text-center  text-danger">Meal: {location.state.mealType}</h4>
                <h5 className="text-center  text-danger">Rating :- {location.state.rating}</h5>
                <div className="col-md-5 mt-2  box1  ">
                    <h4 className="text-danger fs-2 ">ingredients</h4>
                    <ul>
                        <li>{location.state.ingredients[0]}</li>
                        <li>{location.state.ingredients[1]}</li>
                        <li>{location.state.ingredients[2]}</li>
                        <li>{location.state.ingredients[3]}</li>
                        <li>{location.state.ingredients[4]}</li>
                        <li>{location.state.ingredients[5]}</li>
                        </ul>

                </div>
                <div className="col-md-7 mt-2 box ">
                    <h4 className="text-danger fs-2">instructions</h4>
                    <ol>
                        <li>{location.state.instructions[0]}</li>
                        <li>{location.state.instructions[1]}</li>
                        <li>{location.state.instructions[2]}</li> 
                        <li>{location.state.instructions[3]}</li> 
                        <li>{location.state.instructions[4]}</li>
                        <li>{location.state.instructions[5]}</li>
                    </ol>
                </div>
            </div>
         <Link className="tag1" to="/" >GO TO HOME</Link>
          </div>
        </div>
    )
}
export default Singalepage;