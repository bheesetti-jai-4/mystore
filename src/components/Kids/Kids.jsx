import Footer from "../Footer"
import ParEthnicWears from "./ParEthnicWears"
import ParFrocks from "./ParFrocks"
import ParKidjeans from "./ParKidjeans"
import ParKidtShirts from "./ParKidtShirts"
// reduce reusebility coad
function Kids() {
  return (
    <>
      <ParFrocks/>
      <ParKidjeans/>
      <ParKidtShirts/>
      <ParEthnicWears/>
          {/* footer */}
    <Footer/>
    </>
  )
}

export default Kids