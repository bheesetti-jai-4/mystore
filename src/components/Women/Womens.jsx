import Footer from "../Footer"
import ParCuttingTops from "./ParCuttingTops"
import ParJains from "./ParJains"
import ParSaries from "./ParSaries"
import ParTops from "./ParTops"

// reduce reusebility coad
function Womens() {
  
  return (
    <>
      <ParSaries/>
      <ParTops/>
      <ParJains />
      <ParCuttingTops/>
      {/* footer */}
      <Footer/>
    </>
  )
}

export default Womens