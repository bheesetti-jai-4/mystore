/* eslint-disable react/prop-types */
// import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { addtocart } from "../../Store/AllStore";
import { useState } from "react";

function ReCldAllUse({ title, details }) {
   const dispatch =  useDispatch()

   const [show,setshow] = useState(false)
  const handlebutton = (item)=>{
    dispatch(addtocart(item))
    setshow(true);
    setTimeout(() => {
      setshow(false)
    }, 1500);
  }
   

  return (
   
    <div className="container mt-4">
    <div className="row">
      <h3 className="text-center w-100 p-2 m-4 text-danger ">{title}</h3>
      {details.map((item, index) => (
        <div key={index} className="col-md-3 mb-3">
          <div className="card shadow-sm">
            <img
              src={item.image}
              className="card-img-top mx-auto d-block mt-1"
              alt={item.name}
              style={{ width: "100px" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <h4 className="text-danger">₹{item.price}</h4>
              <button
                className="btn btn-primary mt-2 "
                onClick={() =>{handlebutton(item)}}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

      {
        show && (
          <div 
          className="position-fixed top-50 start-50 translate-middle p-3 bg-success text-white rounded shadow"
          style={{ zIndex: 1050 }} >
              Added To Cart!
          </div>
        )
      }

  </div>
  
  );
}

export default ReCldAllUse;
