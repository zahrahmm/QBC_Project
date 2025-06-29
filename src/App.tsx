// import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./components/Routes";
import ProductCard from "./components/ProductCard";

export type productType = {
  productName: string;
  productPrice: number;
  productCardImage: string;
  productDescription: string;
  productRate: number;
  productBrand: string;
  // productUpdateTime: Date;
  // productAvailability: number;
};

function App() {
  

  return (
    <Router>
      <RoutesComponent />
      
    </Router>
  );
}

export default App;
