import { useSelector } from "react-redux"
import ReCldAllUse from "../AllInOne/ReCldAllUse"

function ParTelevisions() {
    const television = useSelector((state)=>state.products.electronics.televisions)
    return <ReCldAllUse title="Televisions" details={television} />
}

export default ParTelevisions