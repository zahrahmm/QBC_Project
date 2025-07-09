<<<<<<< Updated upstream
// import { useState } from "react";
import { RouterProvider } from "react-router";
import Routes from "../src/components/Routes";
import { Toaster } from "sonner";
=======
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./components/Routes";
>>>>>>> Stashed changes

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <RouterProvider router={Routes} />;
    </>
  );
}
export default App;
