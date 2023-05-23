import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./styles/main.css";
import { UserContext } from '../UserContext';
import menu from "../assets/menu2.png";
import notificaciones from "../assets/notificaciones.svg";
import chat from "../assets/chat.svg";
import user from "../assets/user.svg";



function Main() {
  const { userData, logout } = useContext(UserContext);;
  console.log(userData)
  const materias = userData.materias
  
  return (
    <div className="main-page">
      <nav className='upper-nav'>
       
          <button className='logout-boton' onClick={logout}>logout</button>
       
        <div className="navbar__icons">
        <div>
        <img src={notificaciones} alt="Notificaciones" />
      </div>
      <div>
        <img src={chat} alt="Chat" />
      </div>
      <div>
        <span>{userData.usuario}</span>
      </div>
      <div>
        <img src={user} alt="Usuario" />
      </div>
        </div>
      </nav>
      <div className="navbar">
    
  </div>
      <div className='content'>
        <div className='cursos'>
          <h5 id="cursos-title">Mis cursos</h5>
            <div className='cursos-content'>
    	        <ul className='lista-cursos'> 
                {materias.map(materia => (<li key={materia.nombre}>{materia.nombre}</li>))}
              </ul>
            </div>
        </div>
      </div>

      <div className='content2'>
        <div className='programar_asesoria'>
          <h5 id="cursos-title">Asesorías</h5>
          <Link to='/asesorias' title='Asesorias agendadas' style={{ textDecoration: 'none' }}> <input className='submit-button' value="Asesorias agendadas"></input></Link>
          <Link to='/historial' title='Historial asesorías' style={{ textDecoration: 'none' }}> <input className='submit-button' value="Historial asesoría"></input></Link>
          <Link to='/programar' title='Programar asesoría' style={{ textDecoration: 'none' }}> <input className='submit-button' value="Programar asesoría"></input></Link>
        </div>
      </div>
    
     
    </div>
  );
}

export default Main;
