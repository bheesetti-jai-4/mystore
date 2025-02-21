import { useSelector } from "react-redux"
import ReCldAllUse from "../AllInOne/ReCldAllUse"

function ParKidtShirts() {
    const kidtshirts  =  useSelector((state)=>state.products.kidsfashion.kidtShirts)
    return <ReCldAllUse title="Kid T-Shirts" details={kidtshirts} />
 }

export default ParKidtShirts