import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes, Redirect} from "react-router-dom";

//components
import {Footer} from './components/Footer';
import Navbar from './components/Navbar-2';

//views
import Index from './views/Index';
import {Contact} from './views/Contact.js';
import ProjectInfo from './views/ProjectInfo';






ReactDOM.render(
  <BrowserRouter>
  <Navbar/>
  
  <Routes>
      <Route path = "/" element = {<Index/>}/>
      <Route path = "contact" element = {<Contact/>}/>
      <Route path = "/projects/:projectName" element = {<ProjectInfo/>}/>

  </Routes>
  <Footer/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
