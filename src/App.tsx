import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogInPage from './components/LoginPage/LoginPage';
import Register from './components/register/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
