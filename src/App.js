import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import AddUpdateEmployeeComponent from "./components/AddUpdateEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
// import FooterComponent from "./components/FooterComponent";
import LoginComponent from "./components/LoginComponent";
import SignupComponent from "./components/SignupComponent";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <div>
        <Router>
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path="/login" element={<LoginComponent />} />
              <Route path="/signup" element={<SignupComponent />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <ListEmployeeComponent />
                  </PrivateRoute>
                }
              />
              <Route
                path="/employees"
                element={
                  <PrivateRoute>
                    <ListEmployeeComponent />
                  </PrivateRoute>
                }
              />
              <Route
                path="/add-employee"
                element={
                  <PrivateRoute>
                    <AddUpdateEmployeeComponent />
                  </PrivateRoute>
                }
              />
              <Route
                path="/edit-employee/:id"
                element={
                  <PrivateRoute>
                    <AddUpdateEmployeeComponent />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
          {/* <FooterComponent /> */}
        </Router>
      </div>
    </AuthProvider>
  );
}

// const PrivateRoute = ({ element, ...rest }) => {
//   const { user, loading } = useContext(AuthContext);

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   return user ? (
//     <Route {...rest} element={element} />
//   ) : (
//     <Navigate to="/login" />
//   );
// };

export default App;
