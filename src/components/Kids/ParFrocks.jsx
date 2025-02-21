import { useSelector } from "react-redux"
import ReCldAllUse from "../AllInOne/ReCldAllUse"

function ParFrocks() {
   const frock =  useSelector((state)=>state.products.kidsfashion.frocks)
  return <ReCldAllUse title="Frocks" details={frock} />
}

export default ParFrocks