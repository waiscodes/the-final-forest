import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

interface IProps {
  component: any;
  path: any;
}

const PrivateRoute: React.FC<IProps> = ({path, component: Component, ...rest}) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? <Component {...props} /> : <Redirect to='/' />;
      }}
    ></Route>
  );
};

export default PrivateRoute;
