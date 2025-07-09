// import { useState } from "react";
import { RouterProvider } from "react-router";
import Routes from "../src/components/Routes";
import { Toaster } from "sonner";
import ProductPage from "./components/productPage/ProductPage";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <RouterProvider router={Routes} />;
      <ProductPage />
    </>
  );
}

export default App;
