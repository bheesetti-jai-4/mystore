import { useSelector } from "react-redux"
import ReCldAllUse from "../AllInOne/ReCldAllUse"

function ParCuttingTops() {
    const ctops =  useSelector((state)=>state.products.womensfashion.cuttingTops)
    return <ReCldAllUse title="CuttingTops" details={ctops} />
}

export default ParCuttingTops