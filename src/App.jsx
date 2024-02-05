import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthorContextProvider } from "./Context/AuthorContext";
import Nav_bar from "./components/Nav_bar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Acc from "./pages/Acc";
import Protected_route from "./components/Protected_route";

function App() {
  return (
    <>
      <AuthorContextProvider>
        <Nav_bar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/acc" element={
          <Protected_route>
            <Acc />
          </Protected_route>
          } />
        </Routes>
      </AuthorContextProvider>
    </>
  );
}

export default App;
