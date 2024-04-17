import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from "./routes/routes";
import DefaultLayout from "./components/Layout/DefaultLayout/DefaultLayout";
import HeaderOnly from "./components/Layout/HeaderOnly/HeaderOnly";

function App() {
  let defaultRoutes = [];
  let headerOnlyRoutes = [];

  publicRoutes.forEach((route) => {
    if (route.layout === DefaultLayout) {
      defaultRoutes.push(route);
    } else if (route.layout === HeaderOnly) {
      headerOnlyRoutes.push(route);
    }
  });

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            {defaultRoutes.map((route, index) => {
              return (
                <Route key={index} path={route.path} element={<route.component />} />
              );
            })}
          </Route>

          <Route path="/about" element={<HeaderOnly />}>
            {headerOnlyRoutes.map((route, index) => {
                return (
                  <Route key={index} path={route.path} element={<route.component />} />
                );
              })}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
