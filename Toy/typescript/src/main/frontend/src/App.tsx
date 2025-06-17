import React from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Test from "./pages/Test";

function App() {
    return (
        <BrowserRouter>
            <body className="sb-nav-fixed">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/test" element={<Test/>} />
            </Routes>
            </body>
        </BrowserRouter>
    );
}

export default App;
