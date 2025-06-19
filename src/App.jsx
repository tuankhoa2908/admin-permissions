import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './pages/Layout/MainLayout';
import '@ant-design/v5-patch-for-react-19';

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </>
  )
}

export default App
