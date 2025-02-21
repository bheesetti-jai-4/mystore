
import { useSelector } from 'react-redux'
import ReCldAllUse from '../AllInOne/ReCldAllUse'



// passing data using props to child component to reduce reusebile code
function ParPants() {
   const pant =  useSelector((state)=>state.products.mensfashion.pants)
  return <ReCldAllUse title="pants" details={pant}  />
}

export default ParPants