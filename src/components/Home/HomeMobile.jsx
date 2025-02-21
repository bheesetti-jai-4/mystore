import { useSelector } from "react-redux"
import Allcards from "./Allcards"

function HomeMobile() {
   const mob =  useSelector((state)=>state.products.tops.mobiles)
    return <Allcards title="Mobiles" link="/mobiles" details={mob} />
}

export default HomeMobile