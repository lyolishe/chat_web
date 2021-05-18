import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../store";

const Private: React.FC = () => {
    const user = useSelector((state: RootState) => state.user!);

    return (
        <div>
            your name is {user.displayName?? user.login}
        </div>
    )

};

export default Private