import React,{useEffect,useReducer} from "react";
import Router from "next/router";
import AdminLogin from './loginAdmin'





export const AuthAdminContext = React.createContext();

const initialStateAdmin = {
  isAdminAuthenticated: false,
  adminUser: null,
};

const reducerAdmin = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("userAdmin", JSON.stringify(action.payload.adminUser));
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

export default function IndexAdmin() {
  const [stateAdmin, dispatchAdmin] = React.useReducer(reducerAdmin, initialStateAdmin);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userAdmin") || null);
    if (user) {
      dispatchAdmin({
        type: "LOGIN",
        payload: {
          isAdminAuthenticated: true,
          adminUser: user,
        },
      });
    }
  }, []);

  return (
    <>
      <AuthAdminContext.Provider
        value={{
          stateAdmin,
          dispatchAdmin,
        }}
      >
        <AdminLogin></AdminLogin>
      </AuthAdminContext.Provider>
    </>
  );
}
