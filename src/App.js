import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./Components/Navbar.jsx";
import { Suspense } from "react";
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";

const Home = React.lazy(() => import("./Pages/Home.jsx"));
const LoginPage = React.lazy(() => import("./Pages/LoginPage.jsx"));
const Register = React.lazy(() => import("./Pages/RegisterPage.jsx"));
const AdminPage = React.lazy(() => import("./Pages/AdminPage.jsx"));

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BrowserRouter>
        {" "}
        <Suspense fallback={<div className="container">Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<Home></Home>} />
            <Route
              exact
              path="/login"
              element={<LoginPage></LoginPage>}
            ></Route>
            <Route
              exact
              path="/register"
              element={<Register></Register>}
            ></Route>
            <Route 
              exact
              path="/adminpage"
              element = {<AdminPage></AdminPage>}
            ></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
