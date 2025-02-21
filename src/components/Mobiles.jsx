
import { useSelector } from "react-redux"
import ReCldAllUse from "./AllInOne/ReCldAllUse"
import Footer from "./Footer"
 
// reduce reusebility coad 

function Mobiles() {
   const mobile = useSelector((state)=>state.products.mobiles)
  //  return <ReCldAllUse title="Mobiles" details={mobile} />
   return (
    <>
    <ReCldAllUse title="Mobiles" details={mobile} />
    {/* footer */}
    <Footer/>
    </>
   )
}

export default Mobiles

  // mobiles seperate files so

// import { useDispatch, useSelector } from "react-redux";
// import { addtocart } from "../Store/AllStore";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

// function Mobiles() {
//   const dispatch = useDispatch();
//   const data = useSelector((state) => state.products.mobiles);

//   return (
//     <div className="container mt-4">
//       <div className="row">
//         {data.map((item, index) => (
//           <div key={index} className="col-md-3 mb-3">
//             <div className="card shadow-sm">
//               <img src={item.image} className="card-img-top" alt={item.name} />
//               <div className="card-body text-center">
//                 <h5 className="card-title">{item.name}</h5>
//                 <p className="card-text">{item.description}</p>
//                 <h4 className="text-primary">${item.price}</h4>
//                 <button
//                   className="btn btn-primary mt-2"
//                   onClick={() => dispatch(addtocart(item))}
//                 >
//                   ADD TO CART
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Mobiles;