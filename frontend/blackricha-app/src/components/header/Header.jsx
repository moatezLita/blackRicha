
import StoreNavigation from './storeNavigation'
import Navbar from './navbar'



export default function Header() {

  return (
    
      
      <div style={{
        position: "relative",
        top: "100%",
        // right:"100%",
        left: 0,
        zIndex: 9999,
      }} >
        <Navbar/>
      {/* <StoreNavigation />    */}
       </div>  
    
  );
}