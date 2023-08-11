import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Welcome from "./pages/Welcome";
import Layout from "./components/layout/Layout";
import Data from "./pages/Data";
import AppProvider from "./store/AppProvider";

const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  const routesFallback = (
    <div className="centered">
      <CircularProgress />
    </div>
  );

  return (
    <AppProvider>
      <Layout>
        <Suspense fallback={routesFallback}>
          <Routes>
            <Route path="/" exact element={<Navigate to="/welcome" />} />
            <Route path="/welcome" exact element={<Welcome />} />
            <Route
              path="/data"
              exact
              element={<Data fallback={routesFallback} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </AppProvider>
  );
}

export default App;
