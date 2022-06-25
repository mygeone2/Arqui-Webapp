import "../styles/globals.css";

import React, { useState,useEffect } from "react";

import "../styles/base.css";
import "../styles/reset.css";
import "../styles/embla.css";
import "../styles/globals.css";


export const AuthContext = React.createContext();
export const KeyboardContext = React.createContext();


const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(action.payload);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
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
    const token = JSON.parse(localStorage.getItem("token") || null);

    if (user && token) {
      dispatch({
        type: "LOGIN",
        payload: {
          user,
          token,
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
