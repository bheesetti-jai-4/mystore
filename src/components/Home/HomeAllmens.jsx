import { useSelector } from "react-redux"
import Allcards from "./Allcards"

function HomeAllmens() {
    const men =  useSelector((state)=>state.products.tops.mens)
    return <Allcards title="Mens Collection" link="/mens" details={men} />
}

export default HomeAllmens