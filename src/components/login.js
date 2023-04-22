import React from 'react';
import { Link} from 'react-router-dom';
import "./styles/login.css"
import logo from "../assets/logo_login.png"
import { useState } from 'react';

//, useHistory 

function LoginPage() {
 

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 // const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    // logica del login
    
   // history.push('/mainpage');
  };
   //<form onSubmit={handleLogin}>
  return (
    <div className="login-page">
        <div className='form-container'>
            <div className='inner-block'>
                <img src={logo} id='logo-login'/>

                <form>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                    <input type="text" name="username" placeholder='Usuario' />
                    <br />
                    <input type="password" name="password" placeholder='Contraseña' />

                    </div>
                    <p />
                    <Link to = "/main"><button className='boton-inicio' type="submit">Sign in</button></Link>
                </form>
            </div>
        </div>
    </div>
  );
}

export default LoginPage;
