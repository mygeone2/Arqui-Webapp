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
      localStorage.setItem("userAdmin", JSON.stringify(action.payload.user));
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
  const [state, dispatch] = React.useReducer(reducerAdmin, initialStateAdmin);

  return (
    <>
      <AuthAdminContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <AdminLogin></AdminLogin>
      </AuthAdminContext.Provider>
    </>
  );
}
