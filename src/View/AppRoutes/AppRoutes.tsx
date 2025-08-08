import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/home" element={<Home/>}/>
    </Routes>
  );
};

export default AppRoutes;