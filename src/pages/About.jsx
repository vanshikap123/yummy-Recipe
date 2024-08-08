const About=()=>{
    return(
       <div>
        <h1 className="text-center mt-5 ">About</h1>
        <div className="divider"></div>

          <div className="row w-75 m-auto my-5 shadow-lg rounded">
            <div className="col-md-6  d-flex m-auto shadow-lg">
              <img src="https://cdn.dummyjson.com/recipe-images/13.webp" alt="" srcset="" className="w-100 m-auto imge" /></div>
            <div className="col-md-6 ">
              <p className="text-center mt-5 fs-4 fst-italic text-success">Welcome to [Yummy Recipe], your number one source for delicious and easy-to-make recipes. Our mission is to inspire home cooks to create delightful dishes, whether you are a seasoned chef or just starting your culinary journey. We believe that great food brings people together, and we are here to make that experience as enjoyable and accessible as possible.</p>
            </div>

          </div>
          </div>
    )
}
export default About;