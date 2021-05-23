import React from "react";
import {Redirect, Route} from "react-router-dom";
import Login from "../pages/Login";

const Public: React.FC = () => (
    <>
        <Route path='/login' component={Login}/>
        <Redirect to={'/login'} />
    </>
);

export default Public;