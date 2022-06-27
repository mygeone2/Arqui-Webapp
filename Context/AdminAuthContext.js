import React, { createContext,useState,useEffect } from "react";

const AdminAuthContext = React.createContext();

const initialStateAdmin = {
    isAdminAuthenticated: false,
    adminUser: null,
};

const reducerAdmin = (state, action) => {
    switch (action.type) {
        case "LOGIN":
        localStorage.setItem(
            "userAdmin",
            JSON.stringify(action.payload.adminUser)
        );
        return {
            ...state,
            isAdminAuthenticated: action.payload.isAdminAuthenticated,
            adminUser: action.payload.userAdmin,
        };
        case "LOGOUT":
        localStorage.clear();
        return {
            ...state,
            isAdminAuthenticated: false,
            adminUser: null,
        };
        default:
        return state;
    }
};

const AdminAuthContextProvider = ({ children }) => {
    const [adminState, adminDispatch] = React.useReducer(
      reducerAdmin,
      initialStateAdmin
    );

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userAdmin") || null);
        if (user) {
            adminDispatch({
              type: "LOGIN",
              payload: {
                isAdminAuthenticated: true,
                adminUser: user,
              },
            });
        }
    }, []);

    return (
        <AdminAuthContext.Provider
            value={{
                adminState,
                adminDispatch,
            }}
        >
            {children}
        </AdminAuthContext.Provider>
    );
}

export { AdminAuthContext, AdminAuthContextProvider };