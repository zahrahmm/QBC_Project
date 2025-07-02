// import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
 import RoutesComponent from "./components/Routes";

//  import AllProduct from "./Pages/AllProduct";
//  import EditProduct from "./Pages/EditProduct";


function App() {
  return (
      <Router>
       <RoutesComponent />
     </Router>
    //  <AllProduct />
    // <EditProduct productId={""} productData={{
    //   title: "",
    //   price: "",
    //   description: "",
    //   image: undefined
    // }}/>
  );
}

export default App;
