import React from 'react';
import {useSelector} from "react-redux";
import { Switch } from 'react-router-dom';
import {RootState} from "../store";
import Private from "./Private";
import Public from "./Public";

const App: React.FC = () => {
  const user = useSelector<RootState>(state => state.user)

  return (
    <Switch>
      {
        user? <Private/> : <Public/>
      }
    </Switch>
  );
};

export default App;
