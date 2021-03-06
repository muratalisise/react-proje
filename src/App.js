import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import İndex from "./Pages/İndex"
import Login from './Pages/Login';
import Finish from './Pages/Finish';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App"> 
          <BrowserRouter>
              <Routes>
                <Route>
                  <Route index element={<İndex/>} /> 
                  <Route path={"/"} element={<İndex/>}/>
                  <Route path={"/Login"} element={<Login/>}/>
                  <Route path={"/Finish"} element={<Finish/>}/>
                </Route>
              </Routes>
            </BrowserRouter>
    </div>
  );
}
export default App;
