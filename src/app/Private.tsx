import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {Button} from "antd";
import AccountApi from "../api/AccountApi";
import {logout} from "../store/user/userSlice";

const Private: React.FC = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.info);

    const handleLogout = React.useCallback(() => {
        AccountApi.logout()
            .then(() => dispatch(logout()));
    }, [])

    return (
        <div>
            You are <br/>
            {JSON.stringify(user)}
            <br/>
            <Button size='large' onClick={handleLogout}>
                logout
            </Button>
        </div>
    )

};

export default Private