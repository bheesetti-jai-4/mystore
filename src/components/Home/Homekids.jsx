import { useSelector } from "react-redux"
import Allcards from "./Allcards"

function Homekids() {
    const kid =  useSelector((state)=>state.products.tops.Kidss)
    return <Allcards title="Kids Collection"  link="/kids"  details={kid} />
}

export default Homekids