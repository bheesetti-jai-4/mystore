import { useSelector } from "react-redux"
import ReCldAllUse from "../AllInOne/ReCldAllUse"

function Partabels() {
    const table = useSelector((state)=>state.products.furnitures.tables)
    return <ReCldAllUse title="Tables" details={table} />
}

export default Partabels