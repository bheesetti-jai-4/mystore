import { useSelector } from "react-redux"
import ReCldAllUse from "../AllInOne/ReCldAllUse"


// passing data using props to child component to reduce reusebile code 
function ParShitrs() {
   const shirt =  useSelector((state)=>state.products.mensfashion.shirts)
  return <ReCldAllUse title="shirts" details={shirt} />
}

export default ParShitrs