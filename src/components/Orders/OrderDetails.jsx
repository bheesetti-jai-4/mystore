

import { useSelector } from "react-redux";
import OrdersEmpty from "./OrdersEmpty";
// import Footer from "../Footer";

function OrderDetails() {
  const details = useSelector((state) => state.purchesdetails);

  const totalpurchesdetails = details.map((data, index) => (
    <div key={index} className="card mb-3 shadow">
      <div className="card-body">
        <h4 className="card-title text-primary">{data.date}</h4>
        <h5 className="card-subtitle text-success">₹{data.amount.toFixed(2)}</h5>
        <h6 className="mt-3">Purchased Items:</h6>
        <ul className="list-group">
          {data.item.map((subarray, i) => (
            <li key={i} className="list-group-item">
              <strong>{subarray.name}</strong> - ${subarray.price.toFixed(2)} - Qty: {subarray.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ));

  return (
    <>
    <div className="container mt-4">
      {details.length > 0 ? (
        <div>
          <h2 className="text-center text-danger mb-4">Order Details</h2>
          {totalpurchesdetails}
        </div>
      ) : (
        <OrdersEmpty/>
      )}

          
    </div>
        {/* footer */}
        {/* <Footer/> */}
    </>
  );
}

export default OrderDetails;



















// import { useSelector } from "react-redux"

// function OrderDetails() {

//   const details =  useSelector((state)=>state.purchesdetails)
//      const totalpurchesdetails =  details.map((data,index) => (
//       <div key={index} >
//         <h4>{data.date}</h4>
//         <h5>{data.amount}</h5>
//         {/* <h6>{data.item}</h6> */}
//         <h6>Purchased Items:</h6>
//       <ul>
//         {data.item.map((subarray, i) => (
//           <li key={i}>
//             {subarray.name} - ₹{subarray.price} - Qty: {subarray.quantity}
//           </li>
//         ))}
//       </ul>
//       </div>
//      ))

//   return (
//     <div>
//         {
//           details.length > 0 ? 
//           <div>
//             <h2>order details </h2>
//             {totalpurchesdetails}
//           </div>  : <h1>add your orders</h1>
//         }
//     </div>
//   )
// }

// export default OrderDetails
