import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Home from './views/Home';
import Error from './views/Error';
import Search from './components/Search';

const RouteComponent = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Search/>
      <Main />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteComponent;