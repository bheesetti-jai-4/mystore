import { useSelector } from "react-redux"
import ReCldAllUse from "../AllInOne/ReCldAllUse"

function Parwardrobes() {
    const wardrobe = useSelector((state)=>state.products.furnitures.wardrobes)
    return <ReCldAllUse title="Wardrobes" details={wardrobe} />
}

export default Parwardrobes