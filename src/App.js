import logo from './logo.svg';
import './styles/app.scss';
import { Outlet } from "react-router-dom";

import { useState } from 'react';
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
