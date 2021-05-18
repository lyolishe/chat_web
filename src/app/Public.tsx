import React from "react";
import { Route } from "react-router-dom";
import Login from "../pages/Login";

const Public: React.FC = () => (
    <>
        <Route path='/login' component={Login}/>
    </>
);

export default Public;