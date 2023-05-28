
import StoreNavigation from './storeNavigation'


export default function Header() {

  return (
    
      
      <div style={{
        position: "relative",
        top: "100%",
        // right:"100%",
        left: 0,
        zIndex: 9999,
      }} >
      <StoreNavigation />   
       </div>  
    
  );
}