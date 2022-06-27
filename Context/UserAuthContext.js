import React,{useState, useReducer, useEffect} from "react";

const UserAuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
};

const UserReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
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

const UserAuthContextProvider = ({ children }) => {
  const [userState, userDispatch] = React.useReducer(UserReducer, initialState);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || null);

    if (user) {
      userDispatch({
        type: "LOGIN",
        payload: {
          isAuthenticated: true,
          user: user
        },
      });
    }
  }, []);

  return (
    <UserAuthContext.Provider
      value={{
        userState,
        userDispatch,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
}

export { UserAuthContext, UserAuthContextProvider };