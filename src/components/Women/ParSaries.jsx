import { useSelector } from "react-redux"
import ReCldAllUse from "../AllInOne/ReCldAllUse"


function ParSaries() {
    
       const sari =  useSelector((state)=>state.products.womensfashion.sarees)
  return <ReCldAllUse title="saaries" details={sari} />
}

export default ParSaries