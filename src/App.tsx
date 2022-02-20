import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./pages/PrivateRoute";
import MyNavbar from "./components/templates/Navbar";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <MyNavbar />
          <Container className='container'>
            <Switch>
              <PrivateRoute path='/home' component={Dashboard} />
              <Route exact path='/' component={Landing} />
            </Switch>
          </Container>
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
