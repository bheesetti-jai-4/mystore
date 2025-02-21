import { useSelector } from "react-redux"
import ReCldAllUse from "../AllInOne/ReCldAllUse"

function Partshirts() {
 const tsirt =  useSelector((state)=>state.products.mensfashion.tShirts)
 return <ReCldAllUse title="T-Shirts" details={tsirt} />
}

export default Partshirts