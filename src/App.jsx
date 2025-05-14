import React, { useState, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { Routes } from "react-router-dom";
import ErrorFallback from "./components/ErrorFallback";
import Loader from "./components/Loader";

//import AllRoutes from './components/Allroutes'
const AllRoutes = React.lazy(() => import("./components/Allroutes"));
//import NavBar from './components/NavBar'

const NavBar = React.lazy(() => import("./components/NavBar"));

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload();
      }}
    >
      <Suspense fallback={<Loader/>}>
        <NavBar />
        <AllRoutes />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
