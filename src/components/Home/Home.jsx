
import Footer from "../Footer";
import HomeAllmens from "./HomeAllmens";
import Homeelectronic from "./Homeelectronic";
import Homefurniters from "./Homefurniters";
import Homekids from "./Homekids";
import HomeMobile from "./HomeMobile";
import HomeTop from "./HomeTop";
import Homewomen from "./Homewomen";
import sale from "/top/sales3.jpg";

function Home() {

  
  return (
    <>
     <HomeTop/>
    <img src={sale} alt="sales" className="m-2 " style={{width:"100%", height:"500px"  }} />
    <HomeMobile/>
    <HomeAllmens/>
    <Homewomen/>
    <Homekids/>
    <Homeelectronic/>
    <Homefurniters/>

    {/* footer */}
    <Footer/>

    </>
  );
}

export default Home;
