import { useSelector } from "react-redux"
import ReCldAllUse from "../AllInOne/ReCldAllUse"

function ParEthnicWears() {
   const ethnicwears =  useSelector((state)=>state.products.kidsfashion.ethnicWear)
   return <ReCldAllUse title="EthnicWears" details={ethnicwears} />
}

export default ParEthnicWears