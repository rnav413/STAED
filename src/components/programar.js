import React, { useContext, useState, useEffect } from 'react';
import "./styles/main.css";
import { UserContext } from '../UserContext';
import notificaciones from "../assets/notificaciones.svg";
import chat from "../assets/chat.svg";
import user from "../assets/user.svg";
import axios from 'axios';



function Programar() {
    const { userData, logout } = useContext(UserContext);;
    const materias = userData.materias
    const codigo_estudiante = userData.codigo //*
    const [profesores, setProfesores] = useState([]);
    const [horarios, setHorarios] = useState([]);  
    const [materia, setMateria] = useState([]); //*
    const [profesor, setProfesor] = useState([]); 
  
    const [materiaSeleccionada, setMateriaSeleccionada] = useState('');
    const [profesorSeleccionado, setProfesorSeleccionado] = useState('');
    const [horarioSeleccionado, setHorarioSeleccionado] = useState(''); //*
    const [lugarSeleccionado, setLugarSeleccionado] = useState(''); //*
    

    useEffect(() => {
      if (materiaSeleccionada) {
        // Lógica para obtener los profesores por materia
          axios.get(`http://localhost:3000/agendar_profesor/${materiaSeleccionada}`)
        .then(response => {
          setMateria(response.data[0].codigoMateria)
          setProfesores(response.data)
        })
        .catch(error => {
          console.error('Error al obtener los usuarios: ', error);
        });
        
      } else {
        setProfesores([]);
      }
    }, [materiaSeleccionada]);
  
    // Obtener horarios por profesor al seleccionar un profesor
    useEffect(() => {
      if (profesorSeleccionado) {
        // Lógica para obtener los horarios por profesor
        axios.get(`http://localhost:3000/agendar_horario/${profesorSeleccionado}/${materia}`)
        .then(response => {
          setProfesor(response.data[0].cedula)
          setHorarios(response.data)       
        })
        .catch(error => {
          console.error('Error al obtener los usuarios: ', error);
        });
        
      } else {
        setHorarios([]);
      }
    }, [profesorSeleccionado]);

  
  
    const handleMateriaChange = (event) => {
      setMateriaSeleccionada(event.target.value);
      setProfesorSeleccionado('');
      setHorarioSeleccionado('');
      setLugarSeleccionado('virtual')
    };
  
    const handleProfesorChange = (event) => {
      setProfesorSeleccionado(event.target.value);
      setHorarioSeleccionado('');
    };
  
    const handleHorarioChange = (event) => {
      setHorarioSeleccionado(event.target.value);
    };

    const handleLugarChange = (event) => {
      setLugarSeleccionado(event.target.value);
    };

    

    const handleAgendarAsesoria = () => {
      // Lógica para enviar los datos del formulario al servidor
      const data = {
        materia: materia,
        estudiante: codigo_estudiante,
        horario: horarioSeleccionado,
        lugar: lugarSeleccionado
      };
    
      axios.post('http://localhost:3000/agendar-asesoria', data)
        .then(response => {
          // Realizar cualquier acción adicional después de agendar la asesoría
          console.log('Asesoría agendada:', response.data);
          setProfesorSeleccionado('');
          setHorarioSeleccionado('');
        })
        .catch(error => {
          console.error('Error al agendar la asesoría:', error);
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
  
  
        <div className='content2'>
          <div className='programar_asesoria'>
            <h5 id="cursos-title">Asesorías</h5>

      <div className='selectores'>
            <label>Materia:</label>
              <select value={materiaSeleccionada} onChange={handleMateriaChange}>
                <option value="">Seleccione una materia</option>
                {materias.map((materia) => (
                  <option key={materia.id} value={materia.id}>
                      {materia.nombre}
                  </option>
                ))}
                </select>
                </div>

              <p></p>

<div className='selectores'>
            <label>Profesor:</label>
              <select value={profesorSeleccionado} onChange={handleProfesorChange} disabled={!materiaSeleccionada}>
                <option value="">Seleccione un profesor</option>
                {profesores.map((profesor) => (
                  <option key={profesor.id} value={profesor.id}>
                    {profesor.nombreDocente}
                  </option>
                ))}
              </select>
              </div>

              <p></p>
              <div className='selectores'>
              <label>Horario:</label>
              <select value={horarioSeleccionado} onChange={handleHorarioChange} disabled={!profesorSeleccionado}>
                <option value="">Seleccione un horario</option>
                {horarios.map((horario) => (
                  <option key={horario.id} value={horario.consecutivo}>
                    {`${horario.dia_semana}: ${horario.hora_inicio} - ${horario.hora_fin}`}
                  </option>
                ))}
              </select>
              </div>
              <p></p>
              <div className='selectores'>
              <label>Lugar:</label>
              <select value={lugarSeleccionado} onChange={handleLugarChange}>
                <option value="virtual">Virtual</option>
                <option value="presencial">Presencial</option>
              </select>
              </div>
              <p></p>

              <button type="submit" className='submit-button' disabled={!horarioSeleccionado} onClick={handleAgendarAsesoria}>
                Agendar Asesoría
              </button>

          </div>
        </div>
      
       
      </div>
    );
  }
  
  export default Programar;
  