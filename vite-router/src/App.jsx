import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ReactDOM from "react-dom/client";
import {  Routes, Route } from "react-router-dom";
import ToDoList from './pages/ToDoList';
import ProductApiCall from './pages/ProductApiCall';
import Home from "./pages/Home";
import CRUD_Operations from './pages/CRUD_Operations';

import NotPage from "./pages/NotPage";

function App() {
  return (
    // Wrap Routes inside BrowserRouter

      <Routes>
        {/* Defining your routes */}
    
        <Route path="productapicall" element={<ProductApiCall />} />
        <Route index element={<Home />} />
        <Route caseSensitive path="todolist" element={<ToDoList />} />
        <Route path="crudoperations" element={<CRUD_Operations />} />
        <Route path="*" element={<NotPage />} /> {/* Catch-all route for non-matching URLs */}
      </Routes>
  
  );
}

export default App;
