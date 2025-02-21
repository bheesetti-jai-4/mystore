import { useSelector } from "react-redux"
import ReCldAllUse from "../AllInOne/ReCldAllUse"

function ParTops() {
    const top =  useSelector((state)=>state.products.womensfashion.tops)
    return <ReCldAllUse title="Tops" details={top} />
}

export default ParTops