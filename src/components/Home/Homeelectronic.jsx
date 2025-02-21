import { useSelector } from "react-redux"
import Allcards from "./Allcards"

function Homeelectronic() {
    const ele =  useSelector((state)=>state.products.tops.electronic)
    return <Allcards title="Electronic Collection" link="/electronic" details={ele} />
}

export default Homeelectronic