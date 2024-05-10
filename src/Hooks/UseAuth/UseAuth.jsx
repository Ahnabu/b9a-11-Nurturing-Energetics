import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UseAuth = () => {
    const {
        user,

        EmailSingIn,
        googleSingIn,

        LogOut,
        LogInEmail,
        ProfileUpdate,
        loading,
        loveList,
        getLoved,
        state,
        setState,

    } =useContext(AuthContext)

    return (
        {
            user,

            EmailSingIn,
            googleSingIn,

            LogOut,
            LogInEmail,
            ProfileUpdate,
            loading,
            loveList,
            getLoved,
            state,
            setState,

        }

    );
};

export default UseAuth;