import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login'
import Main from './components/main';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
    </Routes>
    </Router>
  );
}

export default App;
