import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./styles/main.css";
import { UserContext } from '../UserContext';


function Main() {
  const { userData } = useContext(UserContext);
  const materias = userData.materias

  return (
    <div className="main-page">
      <nav className='upper-nav'>
          <Link to="/main"></Link>
          <Link to="/perfil" id='logo-perfil'></Link>
      </nav>
      <div className='content'>
        <div className='cursos'>
        <h5 id="cursos-title">Mis cursos</h5>
        <div className='cursos-content'>
    	  <ul className='lista-cursos'> 
          <li className='r0'>
          <ul>
          {materias.map(materia => (
            <li key={materia.nombre}>{materia.nombre}</li>
          ))}
        </ul>
          </li> 
        
        
        </ul>
        </div>
        </div>
      </div>
    
     
    </div>
  );
}

export default Main;
