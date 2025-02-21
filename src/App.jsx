import { BrowserRouter, Route,  Routes,  } from "react-router-dom"
// import {  Link  } from "react-router-dom"
import Mobiles from "./components/Mobiles"
import NavBar from "./components/NavBar"
import SignIn from "./components/verifying/SignIn"
import Cart from "./components/Cart"
// import { useSelector } from "react-redux"
import SignUp from "./components/verifying/SignUp"
import NotFound from "./components/NotFound"

import Womens from "./components/Women/Womens"
import Mens from "./components/Men/Mens"
import Kids from "./components/Kids/Kids"
import Electronics from "./components/Electronics/Electronics"
import Furniter from "./components/Furniture/Furniter"
import Home from "./components/Home/Home"
import OrderDetails from "./components/Orders/OrderDetails"
import Account from "./components/Account"
import Coupon from "./components/coupon"
import Contacts from "./components/Contacts"


function App() {


    //  const cartdata = useSelector((state)=>state.cart)
      // const totalcart = cartdata.reduce((sum,item)=>sum + item.quantity || 0 , 0)



  return (
    <>
    
    <BrowserRouter>  
      <NavBar/>  
    

      {/* <Link to={"/home"} >Home</Link>
      <Link to={"/mobiles"} >Mobiles</Link>
      <Link to={"/mens"} >mens</Link>
      <Link to={"/womens"} >womens</Link>
      <Link to={"/kids"} >Kids</Link>
      <Link to={"/furniter"} >furniter</Link>
      <Link to={"/electronic"} >Electronic</Link>
      <Link to={"/cart"} >Cart <span>{totalcart}</span> </Link>
      <Link to={"/login"} >Login</Link>
      <Link to={"/order"} >OrderDetails</Link>
      <Link to={"/account"} >account</Link>
      <Link to={"/signup"} >sign up</Link>
      <Link to={"/coupon"} >coupon</Link> */}



      {/* routes the links */}
      <Routes>
        <Route path="/*" element={<NotFound/>} />
        <Route path="/" element={<Home/>} >  </Route>
        <Route path="/home" element={ <Home/> } ></Route>
        <Route path="/mobiles" element={<Mobiles/>} />
        <Route path="/mens" element={ <Mens/> } />
        <Route path="/womens" element={ <Womens/> } />
        <Route path="/kids" element={ <Kids/> } />
        <Route path="/furniter" element={ <Furniter/> } />
        <Route path="/electronic" element={<Electronics/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/order" element={<OrderDetails />} />
        <Route path="/account" element={<Account />} />
        <Route path="/coupon" element={<Coupon />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    
    </BrowserRouter>

    </>
  )
}




export default App

