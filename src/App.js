import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserContextProvider } from './UserContext'
import Login from './components/login'
import Main from './components/main';
import Asesorias from './components/asesorias';
import Programar from './components/programar';
import Historial from './components/historial';

function App() {
  return (
    <Router>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path='/asesorias' element={<Asesorias />} />
          <Route path='/programar' element={<Programar />} />
          <Route path='/historial' element={<Historial />} />
        </Routes>
      </UserContextProvider>
    </Router>
  );
}

export default App;
