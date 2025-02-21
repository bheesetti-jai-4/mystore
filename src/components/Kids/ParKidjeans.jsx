import { useSelector } from "react-redux"
import ReCldAllUse from "../AllInOne/ReCldAllUse"

function ParKidjeans() {
    const kidjeans  =  useSelector((state)=>state.products.kidsfashion.kidjeans)
    return <ReCldAllUse title="Kid Jeans" details={kidjeans} />
 }


export default ParKidjeans