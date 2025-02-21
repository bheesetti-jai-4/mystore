import { Link } from "react-router-dom";
import iphone from "/mobileall/iphone22.jpeg"; // Import your image
import kid from "/kids/frock3.webp";
import women from "/women/sari2.webp";
import bed from "/furnitures/b2.webp"
import men from "/men/tone2.webp"
import laptop from "/electronics/l1.webp"




function HomeTop() {
  return (
    <>
     <div
        className="d-flex justify-content-center align-items-center gap-5 container-fluid flex-wrap mt-1 
        
         "
      >
        {/*  Mobile Link */}
        <Link to="/mobiles" className="text-decoration-none">
          <div className="p-2 text-center">
            <img
              src={iphone}
              alt="Mobiles"
              className="card-img-top"
              style={{ width: "100px", height: "100px", cursor: "pointer" }}
            />
            <h5 className=" text-dark">Mobile</h5>
          </div>
        </Link>

        {/* mens  Link */}
        <Link to="/mens" className="text-decoration-none">
          <div className="p-2 text-center">
            <img
              src={men}
              alt="Mobiles"
              className="card-img-top"
              style={{ width: "100px", height: "100px", cursor: "pointer" }}
            />
            <h5 className=" text-dark">mens</h5>
          </div>
        </Link>
        {/* womens link  */}
        <Link to="/womens" className="text-decoration-none">
          <div className="p-2 text-center">
            <img
              src={women}
              alt="Mobiles"
              className="card-img-top"
              style={{ width: "100px", height: "100px", cursor: "pointer" }}
            />
            <h5 className=" text-dark">womens</h5>
          </div>
        </Link>
        {/* kids link */}
        <Link to="/kids" className="text-decoration-none">
          <div className="p-2 text-center">
            <img
              src={kid}
              alt="Mobiles"
              className="card-img-top rounded-5"
              style={{ width: "100px", height: "110px", cursor: "pointer" }}
            />
            <h5 className=" text-dark">kids</h5>
          </div>
        </Link>

        {/* electronic link  */}
        <Link to="/electronic" className="text-decoration-none">
          <div className="p-2 text-center">
            <img
              src={laptop}
              alt="Mobiles"
              className="card-img-top"
              style={{ width: "100px", height: "100px", cursor: "pointer" }}
            />
            <h5 className=" text-dark">electronics</h5>
          </div>
        </Link>
        {/* furniter links */}
        <Link to="/furniter" className="text-decoration-none">
          <div className="p-2 text-center">
            <img
              src={bed}
              alt="Mobiles"
              className="card-img-top"
              style={{ width: "100px", height: "100px", cursor: "pointer" }}
            />
            <h5 className=" text-dark">furniter</h5>
          </div>
        </Link>
      </div>
    </>
  )
}

export default HomeTop