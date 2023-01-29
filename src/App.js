import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import GlobalStyle from './assets/reset';
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
