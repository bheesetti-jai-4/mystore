

import { useDispatch, useSelector } from "react-redux";
import { addpurchesdetails, clearcartdata, decrement, increment, remove } from "../Store/AllStore";
import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import CartEmpty from "./CartEmpty";
import { useNavigate } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  // const [trueval, settrueval] = useState(false);

  // const [truecoup, settruecoup] = useState(false);

  const cartitems = useSelector((state) => state.cart); 
  const navigate = useNavigate()

  // Discount states
  const [discount, setDiscount] = useState(0);
  // Calculate the total price of cart items
  const totalPrice = cartitems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  // calculate discount amouunt 
  const discountAmount = (totalPrice * discount) / 100;
  //calculate discounttotal
  const discountedTotal = totalPrice - discountAmount;

  const applyDiscount = (value) => {
    setDiscount(value);
    // settrueval(true);
  };

  // Coupon state
  const [coupon, setCoupon] = useState("");
  const [coupondiscount,setcoupondiscount] = useState(null)

  const submithandle = (e) => {
    e.preventDefault();
    switch(coupon.toUpperCase().trim()){
      case "APPLAY10" : setcoupondiscount(10)
                      break
      case "APPLAY20" : setcoupondiscount(20)
                      break
      case "APPLAY30" : setcoupondiscount(30)
                      break
      default : setcoupondiscount(null)
    }
    

  };
  // discount for applay coupons
  const couponalldiscount = (discountedTotal *coupondiscount)/100
  const finalAmount = discountedTotal - couponalldiscount;

  // Handle purchase
  const handlePurchase = () => {
    const purchaseDate = new Date().toLocaleDateString();
    let purchaseDetails = { item: [...cartitems], date: purchaseDate, amount: finalAmount };

    dispatch(addpurchesdetails(purchaseDetails));
    dispatch(clearcartdata());
    // console.log(alert("order sucessfull "));
    alert("order sucessfull done! \nGo and check Order Details \nYour Account  ")
    
  };

  return (
    <>
    <div className="container mt-4">
      {cartitems.length > 0 ? (
        <div className="row">
          {/* Left Side: Cart Items */}
          <div className="col-md-8">
            <h3>Shopping Cart</h3>
            {cartitems.map((item, index) => (
              <div key={index} className="card mb-3 p-3 shadow-sm">
                <div className="row g-3 align-items-center">
                  {/* Image on Left */}
                  <div className="col-md-4 text-center">
                    <img src={item.image} alt={item.name} className="img-fluid rounded" style={{ maxHeight: "150px" }} />
                    <div className="mt-2">
                      <button onClick={() => dispatch(decrement(item))} className="btn btn-danger btn-sm mx-1">-</button>
                      <button onClick={() => dispatch(remove(item))} className="btn btn-warning btn-sm mx-1">Remove</button>
                      <button onClick={() => dispatch(increment(item))} className="btn btn-success btn-sm mx-1">+</button>
                    </div>
                  </div>

                  {/* Details on Right */}
                  <div className="col-md-8">
                    <h5>{item.name}</h5>
                    <p className="text-muted">Price: ₹{item.price} | Quantity: {item.quantity}</p>
                    <p className="text-muted" > {item.description} </p>
                    <h6>Total: ₹{item.price * item.quantity}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Price Details */}
          <div className="col-md-4">
            <div className="card p-3 shadow-sm">
              <h4>Price Details</h4>
              <p>Total Price: ₹{totalPrice}</p>
              <p>Discount: ₹{discountAmount.toFixed(2)}</p>
              <h5>Subtotal: ₹{discountedTotal.toFixed(2)}</h5>

              {/* Discount Buttons */}
              <div className="mb-3">
                <button onClick={() => applyDiscount(10)} className="btn btn-primary btn-sm mx-1">10% Off</button>
                <button onClick={() => applyDiscount(20)} className="btn btn-primary btn-sm mx-1">20% Off</button>
                <button onClick={() => applyDiscount(30)} className="btn btn-primary btn-sm mx-1">30% Off</button>
                <button onClick={ ()=>navigate("/coupon")} className="btn btn-primary btn-sm mx-1 mt-1"> Applay Both Coupons</button>
              </div>

              {/* Coupon Input */}
              <form onSubmit={submithandle} className="mb-3">
                <input type="text" className="form-control mb-2" placeholder="Enter coupon..." value={coupon} onChange={(e) => setCoupon(e.target.value)} />
                <button type="submit" className="btn btn-dark btn-sm w-100">Apply Coupon</button>
              </form>

              {/* Coupon Discount */}
              {coupondiscount && (
                <>
                  <p>Coupon Discount: ₹{couponalldiscount.toFixed(2)}</p>
                  <h5>Final Amount: ₹{finalAmount.toFixed(2)}</h5>
                </>
              )}
              {/* Place Order Button */}
              <button onClick={handlePurchase } className="btn btn-success w-100 ">Place Order</button>
            </div>
          </div>
        </div>
      ) : (
        <CartEmpty/>
      )}
    </div>
    
    </>
  );
}

export default Cart;
































// import { useDispatch, useSelector } from "react-redux"
// import { addpurchesdetails, clearcartdata, decrement, increment, remove } from "../Store/AllStore";
// import { useState } from "react";

// function Cart() {

//     const dispatch = useDispatch();
//     const [trueval,settrueval] = useState(false)
//     const [truecoup,settruecoup] = useState(false)

//      const cartitems =  useSelector((state)=>state.cart)
//        const cartdetails =  cartitems.map((item,index)=>(
//           <div key={index}>
//             <img src={item.image} alt={item.image} />
//             <li>{item.name} - {item.price} -  {item.quantity}   </li>
//             <button onClick={() => {dispatch(decrement(item))}} >decrement</button>
//             <button onClick={() => {dispatch(remove(item))}} >Remove</button>
//             <button onClick={()=>{dispatch(increment(item))}} >increment </button>
//           </div>
//         ))

      
//        // Static action and states for discount
//         const [discount, setDiscount] = useState(0); // Store the discount percentage as a number

//        // Calculate the total price of cart items
//        const totalPrice = cartitems.reduce((sum, item) => sum + item.price * item.quantity, 0);

       
//       // Apply discount
//        const discountapplay =   (totalPrice * (discount / 100));
//        const discountapplyedall = (value) => {
//         setDiscount(value)
//         settrueval(true)

//        }

//        // totalamount
//        const TotalAmount = totalPrice - (totalPrice * (discount / 100));

//       //   after applay coupon details 
//         const [coupon,setcoupon] = useState("")

//         const submithandle = (e) =>{
//           e.preventDefault()
//           settruecoup(true)
//         }
//         let coupondiscount = 0 ;
//         if(coupon.toUpperCase().trim() === "APPLAY10"  ){
//           coupondiscount = TotalAmount/10;
//         }
//         // coupon discount 
//         // coupon amount 
//         const couponamount = TotalAmount - coupondiscount;
      
         

//         const handlepurches = () => {
//           const purchesdate = new Date().toLocaleDateString();
//           let purchesdetails = {item:[...cartitems],date:purchesdate,amount:couponamount}
//           // send the purches object details to cart 
//           dispatch(addpurchesdetails(purchesdetails))
//           // cleaarthe cart 
//           dispatch(clearcartdata())
//         }

//   return (
//     <div>

//       { cartitems.length > 0 ? 
//       <div>
//         {cartdetails}

//         <div>
//     <p>
//       <button onClick={()=>discountapplyedall(10)} >10%Dis</button>
//       <button onClick={()=>discountapplyedall(20)} >20%Dis</button>
//       <button onClick={()=>discountapplyedall(30)} >30%Dis</button>
//     </p>
//      { trueval && <>

//       <h2>price details</h2>
//       <p>total price : {totalPrice} </p>
//       <p>discountapplay : {discountapplay} </p>
//       <p>TotalAmount : {TotalAmount} </p>
      
//      </> }
//       </div>
//         {/* coupon details */}

//         <form onSubmit={submithandle}>
//         <input type="text" placeholder="Enter coupon....." value={coupon} onChange={(e)=>setcoupon(e.target.value)}  /> <button type="submit" >submit</button>
//         </form>

//         {truecoup && <> 
//           <p>Coupon Discount : {coupondiscount}</p>
//         <p>coupon amount : {couponamount}</p>
//         </>}


//        <button onClick={handlepurches} >place order</button>

//       </div> : <h1>cart is empty</h1> }
      
//     </div>
//   )
// }

// export default Cart

