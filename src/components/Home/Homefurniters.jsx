import { useSelector } from "react-redux"
import Allcards from "./Allcards"

function Homefurniters() {
    const furn =  useSelector((state)=>state.products.tops.furniter)
    return <Allcards title="Furniter Collection" link="/furniter" details={furn} />
}

export default Homefurniters