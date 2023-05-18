import React from 'react';
import { useNavigate} from 'react-router-dom';
import "./styles/login.css"
import logo from "../assets/logo_login.png"
import { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../UserContext';

function LoginPage() {
 

  const [usuario, setUsername] = useState('');
  const [contraseña, setPassword] = useState('');
  const [error, setError] = useState('');

  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();
 // const history = useHistory();

  const handleLogin = async (e) => {

    e.preventDefault();
    setError('');

    try {

      const response = await axios.post('http://localhost:3000/login', { usuario, contraseña });
      console.log(response.data);
      setUserData(response.data);
      navigate('/main')
    
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('Error en el servidor');
      }
    }
  };
   //<form onSubmit={handleLogin}>
  return (
    <div className="login-page">
        <div className='form-container'>
            <div className='inner-block'>
                <img src={logo} id='logo-login' alt='logo'/>

                <form id='login-input' onSubmit={handleLogin}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                    <input type="text" id="username" placeholder='Usuario'  onChange={(e) => setUsername(e.target.value)}/>
                    <br />
                    <input type="password" id="password" placeholder='Contraseña' onChange={(e) => setPassword(e.target.value)}/>

                    </div>
                    <p />
                    <button id='boton-inicio' type="submit">Log in</button>
                    {error && <p>{error}</p>}
                </form>
            </div>
        </div>
    </div>
  );
}

export default LoginPage;