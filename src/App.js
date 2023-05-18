import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserContextProvider } from './UserContext'
import Login from './components/login'
import Main from './components/main';


function App() {
  return (
    <Router>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </UserContextProvider>
    </Router>
  );
}

export default App;
