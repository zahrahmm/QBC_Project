// import { useState } from "react";
import Layout from "./components/Layout";
import Shop from "./Pages/Shop";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="relative">
      <Layout />
      <Shop />
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
