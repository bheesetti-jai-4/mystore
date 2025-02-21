import { useSelector } from "react-redux"
import ReCldAllUse from "../AllInOne/ReCldAllUse"


function Parbeds() {
    const bed = useSelector((state)=>state.products.furnitures.beds)
    return <ReCldAllUse title="Beds" details={bed} />
}

export default Parbeds