import Footer from "../Footer"
import ParHoodies from "./ParHoodies"
import ParPants from "./ParPants"
import ParShitrs from "./ParShitrs"
import Partshirts from "./Partshirts"


// reduce reusebility coad
function Mens() {

  return (
    <>
        {/* take the data form child element */}
          <ParShitrs/>
          <ParPants/>
          <Partshirts/>
          <ParHoodies/>
              {/* footer */}
    <Footer/>
    </>
  )
}

export default Mens