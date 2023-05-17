import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/main.css";


function Main() {
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
            <Link to='/curso_1' title='Ejemplo curso 1'>
              <i className='icono-cursos' />
              "Ingenieria de Software 2"
            </Link>
          </li> 
        
        
        </ul>
        </div>
        </div>
      </div>
    
     
    </div>
  );
}

export default Main;
