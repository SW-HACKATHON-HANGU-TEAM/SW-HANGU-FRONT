import React from "react";
import 'App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './Component/Navbar.js'

import Home from './Page/Home.js'
import AutoGenerateAPIDocu from './Page/AutoGenerateAPIDocu.js'
import AutoGenerateAPIDocuState from './Page/AutoGenerateAPIDocuState.js'
import TestCode from './Page/TestCode.js'
import DevDesign from './Page/DevDesign.js'
import DevDesignState from './Page/DevDesignState.js'
import MyPage from './Page/MyPage'
import Test from './Page/Test'
import TestCodeSearch from './Page/TestCodeSearch'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/test" element={<Test/>}/>
          <Route path="/AutoGenerateAPIDocu" element={<AutoGenerateAPIDocu/>}/>
          <Route path="/AutoGenerateAPIDocuState" element={<AutoGenerateAPIDocuState/>}/>
          <Route path="/TestCode" element={<TestCode/>}/>
          <Route path="/DevDesign" element={<DevDesign/>}/>
          <Route path="/DevDesignState" element={<DevDesignState/>}/>
          <Route path="/MyPage" element={<MyPage/>}/>
          <Route path="/TestCodeSearch" element={<TestCodeSearch/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
