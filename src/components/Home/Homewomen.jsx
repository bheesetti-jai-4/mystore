import { useSelector } from "react-redux"
import Allcards from "./Allcards"

function Homewomen() {
    const women =  useSelector((state)=>state.products.tops.women)
    return <Allcards title="Womens Collection" link="/womens" details={women} />
}

export default Homewomen