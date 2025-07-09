// import { useState } from "react";
import { RouterProvider } from "react-router";
import Routes from "../src/components/Routes";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <RouterProvider router={Routes} />;
    </>
  );
}




export default App;
