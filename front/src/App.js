import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation,useNavigate } from "react-router-dom";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import Detail from "./components/Detail/Detail";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import About from "./components/About/About";
import Favorites from "./components/Favorites/Favorites";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

function App() {
  //datos estaticos login
  const USERNAME = 'edwardraga@icloud.com';
  const PASSWORD   = '123456' 
  
  //estado que de bandera roja login
  let [access,setAccess] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  
  const login = (userData)=>{
    console.log('funcion login');
    if(userData.username === USERNAME && userData.password === PASSWORD){
      console.log('funcion login');
      setAccess(true);
      navigate('/home');
    }
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);


 return (
  <div className="root">
    {location.pathname === '/' ? (
      // Si la ruta actual es '/', muestra este contenido
      <Login login={login} />
    ) : (
      // Si la ruta actual es diferente a '/', muestra este contenido
      <>
        <NavBar />
        <Routes>
          <Route path={"/home"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/favorites" element={<Favorites/>} />
          <Route path={"home/detail/:id"} element={<Detail />}/>
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
        {/* <Footer/> */}
      </>
    )}
  </div>
);
}

export default App;
