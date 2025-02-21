import { useSelector } from "react-redux"
import ReCldAllUse from "../AllInOne/ReCldAllUse"

function Parsofas() {
    const sofa = useSelector((state)=>state.products.furnitures.sofas)
    return <ReCldAllUse title="Sofas" details={sofa} />
}

export default Parsofas