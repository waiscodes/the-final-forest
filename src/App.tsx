import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './app.css';

import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./pages/PrivateRoute";
import Landing from "./pages/Landing";
import Navbar from './components/Navbar/Navbar';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
          <Container className='container'>
            <Switch>
              <PrivateRoute path='/home' component={Dashboard} />
              <PrivateRoute path='/profile' component={ProfilePage} />
              <Route exact path='/' component={Landing} />
            </Switch>
          </Container>
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
