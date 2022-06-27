import "../styles/globals.css";
import "../styles/base.css";
import "../styles/reset.css";
import "../styles/embla.css";
import "../styles/globals.css";

import React, { useState,useEffect } from "react";
import { UserAuthContext, UserAuthContextProvider } from "../Context/UserAuthContext";
import { AdminAuthContext, AdminAuthContextProvider } from "../Context/AdminAuthContext";
import { ProductsContext, ProductsContextProvider } from "../Context/ProductsContext";


function MyApp({ Component, pageProps }) {

  return (
    <>
    <ProductsContextProvider>
      <AdminAuthContextProvider>
        <UserAuthContextProvider>
          <Component {...pageProps} />
        </UserAuthContextProvider>
      </AdminAuthContextProvider>
      </ProductsContextProvider>
    </>
  );
}

export default MyApp;
