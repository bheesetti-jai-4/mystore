


/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import "./Allcards.css";

function Allcards( {title ,link , details} ) {
  return (
    <>
        <div className="container mt-4">
            <div className="row">
              <h3 className="text-center w-100 p-2 m-2 text-danger mobile-heading ">{title}</h3>
              {details.map((item, index) => (
                <div key={index} className="col-md-3 mb-3">
                     <Link to={link} className="text-decoration-none">
                         <div className="p-2 text-center">
                          <img
                             src={item.image}
                             alt="Mobiles"
                            className="card-img-top zoom-effect"
                             style={{ width: "150px",height: "180px" , cursor: "pointer" }}
                          />
                         <h5 className="  text-dark mt-3">{item.name}</h5>
                         </div>
                    </Link>
                </div>
              ))}
            </div>
          </div>

    </>
  )
}

export default Allcards

{/* <div className="card shadow-sm">
<img
  src={item.image}
  className="card-img-top mx-auto d-block"
  alt={item.name}
  style={{ width: "100px" }}
/>
<div className="card-body text-center">
  <h5 className="card-title">{item.name}</h5>
</div>
</div> */}