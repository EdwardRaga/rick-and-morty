import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Form from "./Form";
import NotFoundPage from "./NotFoundPage";
import Footer from "./Footer";
import Detail from "./Detail";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route exact path="/form" element={<Form/>} />
        <Route path={"/detail/:id"} element={<Detail/>}/>
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
