import { useSelector } from "react-redux"
import ReCldAllUse from "../AllInOne/ReCldAllUse"

function ParSmartwatches() {
    const smartwatch = useSelector((state)=>state.products.electronics.smartwatches)
    return <ReCldAllUse title="SmartWatches" details={smartwatch} />
}


export default ParSmartwatches