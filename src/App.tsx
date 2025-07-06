
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RoutesComponent from "./components/Routes";


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <RoutesComponent />
      </Router>
  
    </QueryClientProvider>
  );
}

export default App;
