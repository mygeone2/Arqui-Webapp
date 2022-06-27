import React,{useEffect,useReducer} from "react";
import AdminLogin from './loginAdmin'

import {
  AdminAuthContext,
  AdminAuthContextProvider,
} from "../../Context/AdminAuthContext.js";

export default function IndexAdmin() {
  
  return (
    <>
      <AdminAuthContextProvider>
        <AdminLogin></AdminLogin>
      </AdminAuthContextProvider>
    </>
  );
}
