import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./css/main.css";
import SizeBox from './view/SizeBox';
import UpCount from './view/UpCount';

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/upcount">upcount</Link>
      <Link to="/sizebox">sizebox</Link>
      <Routes>
        <Route path='/upcount' element={<UpCount />} />
        <Route path='sizebox' element={<SizeBox />} />
      </Routes>
    </BrowserRouter>
  );
};
