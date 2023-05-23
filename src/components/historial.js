import React, { useContext, useEffect, useState } from 'react';
import "./styles/main.css";
import { UserContext } from '../UserContext';
import notificaciones from "../assets/notificaciones.svg";
import chat from "../assets/chat.svg";
import user from "../assets/user.svg";
import axios from 'axios';


function Historial() {
  const { userData, logout } = useContext(UserContext);;
  const materias = userData.materias
  const [historial, setHistorial] = useState([])
  const codigoEstudiante = userData.codigo

  useEffect(() => {
    // Realiza una solicitud al servidor para obtener los usuarios
    axios.get(`http://localhost:3000/historial/${codigoEstudiante}`)
      .then(response => {
        console.log(response.data)
        setHistorial(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los usuarios: ', error);
      });
  }, []);


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
          <h5 id="cursos-title">Historial de Asesorias</h5>
            <div className='cursos-content'>
              <table className='tabla-cursos'>
                <thead>
                  <tr>
                      <th>Materia</th>
                      <th>Profesor</th>
                      <th>Horario</th>
                      <th>Lugar</th>
                      <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {historial.map(historial => (
                    <tr key={historial.consecutivo}>
                      <td>{historial.Materia}</td>
                      <td>{historial.nombreDocente}</td>
                      <td>{historial.horario}</td>
                      <td>{historial.lugar}</td>
                      <td>{historial.estado}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
      </div>     
    </div>
  );
  }
  
  export default Historial;
  