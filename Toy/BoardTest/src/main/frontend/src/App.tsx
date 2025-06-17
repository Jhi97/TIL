import React from 'react';
import Header from './components/Header'
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Container} from "react-bootstrap";
import BoardForm from "./components/BoardForm";
import BoardDetail from "./pages/BoardDetail";
import BoardWrite from "./pages/BoardWrite";
import BoardEdit from "./pages/BoardEdit";
import BoardList from "./pages/BoardList";

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Container className="mt-3">
          <Routes>
            <Route path="/" element={<BoardList/> }/>
            <Route path="/board/:id" element={<BoardDetail/> }/>
            <Route path="/write" element={<BoardWrite/> }/>
            <Route path="/edit/:id" element={<BoardEdit/> }/>
          </Routes>
        </Container>
      </BrowserRouter>
  );
}

export default App;
