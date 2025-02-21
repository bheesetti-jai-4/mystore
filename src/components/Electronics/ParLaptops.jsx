

import { useSelector } from 'react-redux'
import ReCldAllUse from '../AllInOne/ReCldAllUse'

function ParLaptops() {  
     const laptop = useSelector((state)=>state.products.electronics.laptops)
     return <ReCldAllUse title="Laptops" details={laptop} />
}

export default ParLaptops