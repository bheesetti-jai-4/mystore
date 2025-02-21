import { useSelector } from "react-redux"
import ReCldAllUse from "../AllInOne/ReCldAllUse"

function ParHeadphones() {
    const headphone = useSelector((state)=>state.products.electronics.headphones)
    return <ReCldAllUse title="HeadPhones" details={headphone} />
}

export default ParHeadphones