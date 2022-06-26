import "../styles/globals.css";

import React, { useState,useEffect } from "react";

import "../styles/base.css";
import "../styles/reset.css";
import "../styles/embla.css";
import "../styles/globals.css";


export const AuthContext = React.createContext();
export const KeyboardContext = React.createContext();
export const AuthAdminContext = React.createContext({
  isAdminAuthenticated: false,
  adminUser: null,
});


const initialState = {
  isAuthenticated: false,
  user: null,
};

const reducerAdmin = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("userAdmin", JSON.stringify(action.payload.user));
      return {
        ...state,
        isAdminAuthenticated: true,
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

}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(action.payload);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || null);

    if (user) {
      dispatch({
        type: "LOGIN",
        payload: {
          user,
        },
      });
    }
  }, []);

  
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}>
        <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default MyApp;
