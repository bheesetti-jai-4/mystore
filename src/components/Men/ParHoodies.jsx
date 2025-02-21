import { useSelector } from "react-redux"
import ReCldAllUse from "../AllInOne/ReCldAllUse"

function ParHoodies() {
    const hodies = useSelector((state)=>state.products.mensfashion.hoodies)

  return <ReCldAllUse title="Hoodies" details={hodies} />
}

export default ParHoodies



