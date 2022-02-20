import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./pages/PrivateRoute";
import Landing from "./pages/Landing";
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
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
