import SignUp from './pages/SignUp';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import GlobalStyle from './assets/reset';
import Dashboard from './pages/Dashboard/Index';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './contexts/UserContext';
import useToken from './hooks/useToken';
import Available from './pages/Dashboard/Available';
import Wanted from './pages/Dashboard/Wanted';
import Trades from './pages/Dashboard/Trades';
import Requests from './pages/Dashboard/Requests';

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRouteGuard>
                  <Dashboard />
                </ProtectedRouteGuard>
              }
            >
              <Route path="available" element={<Available />} />
              <Route path="wanted" element={<Wanted />} />
              <Route path="trades" element={<Trades />} />
              <Route path="requests" element={<Requests />} />
              <Route index path="*" element={<Navigate to="/dashboard/available" />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>{children}</>;
}

export default App;
