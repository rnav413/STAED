import React, { useContext, useState, useEffect } from 'react';
import "./styles/main.css";
import { UserContext } from '../UserContext';
import notificaciones from "../assets/notificaciones.svg";
import chat from "../assets/chat.svg";
import user from "../assets/user.svg";
import axios from 'axios';


function Asesorias() {
    const { userData, logout } = useContext(UserContext);;
    const materias = userData.materias
    const [asesoria, setAsesoria] = useState([])
    const codigoEstudiante = userData.codigo

    useEffect(() => {
      // Realiza una solicitud al servidor para obtener los usuarios
      axios.get(`http://localhost:3000/asesoria/${codigoEstudiante}`)
        .then(response => {
          console.log(response.data)
          setAsesoria(response.data);
        })
        .catch(error => {
          console.error('Error al obtener los usuarios: ', error);
        });
    }, []);

    const handleCancelar = (consecutivo) => {
      axios.delete(`http://localhost:3000/cancelar/${consecutivo}`)
        .then(response => {
          // Lógica después de la eliminación exitosa del registro
          console.log('Registro eliminado');
          window.location.reload()
        })
        .catch(error => {
          // Manejo de errores
          console.error('Error al eliminar el registro:', error);
        });
    };
  
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
            <h5 id="cursos-title">Asesorias Pendientes</h5>
              <div className='cursos-content'>
                <table className='tabla-cursos'>
                  <thead>
                    <tr>
                      <th>Materia</th>
                      <th>Profesor</th>
                      <th>Horario</th>
                      <th>Lugar</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {asesoria.map(asesoria => (
                      <tr key={asesoria.consecutivo}>
                        <td>{asesoria.Materia}</td>
                        <td>{asesoria.nombreDocente}</td>
                        <td>{asesoria.horario}</td>
                        <td>{asesoria.lugar}</td>
                        <td>{asesoria.estado}</td>
                        <td>
                          <button onClick={() => handleCancelar(asesoria.consecutivo)}>Cancelar</button>
                        </td>
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
  
  export default Asesorias;
  