import { useSelector } from "react-redux"
import ReCldAllUse from "../AllInOne/ReCldAllUse"


function ParJains() {
  const jens =  useSelector((state)=>state.products.womensfashion.jeans)
  return <ReCldAllUse title="Jeans" details={jens} />
}

export default ParJains