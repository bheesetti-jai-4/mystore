import Footer from "../Footer"
import ParHeadphones from "./ParHeadphones"
import ParLaptops from "./ParLaptops"
import ParSmartwatches from "./ParSmartwatches"
import ParTelevisions from "./ParTelevisions"

// reduce reusebility coad
function Electronics() {
  return (
    <>
        <ParLaptops/>
        <ParHeadphones/>
        <ParSmartwatches/>
        <ParTelevisions/>
            {/* footer */}
    <Footer/>
    </>
  )
}

export default Electronics