import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {RootState} from "../store";
import Private from "./Private";
import Public from "./Public";
import AccountApi from "../api/AccountApi";
import {login, logout} from "../store/user/userSlice";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user.info)

  React.useEffect(() => {
    AccountApi.getUser()
        .then((user) => dispatch(login(user)))
        .catch(() => dispatch(logout()));
  }, []);

  return (
    <Router>
      <Switch>
        {
          user? <Private/> : <Public/>
        }
      </Switch>
    </Router>
  );
};

export default App;
