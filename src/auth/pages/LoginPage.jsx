import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const {login} = useContext( AuthContext );
  const navigate = useNavigate();
  const [logg, Setlogg] = useState(false);
  const [namein, setNamein] = useState('');
  const nolog = (e) => {
    e.preventDefault();

    alert("ingrese un nombre de usuario");
  }
  const name = (e) => {
    const logeado = e.target.value;
    if(logeado.length >=4 ){
      Setlogg(true);
      setNamein(logeado);
    }

  
  }
  const onLogin = (e) => {
    console.log(e.value);
    const lastPath = localStorage.getItem('lastPath') || '/'
    login(namein);


    navigate(lastPath,{
      replace: true,
  });
  }
  return (
   
    <div className="wra">
    <div class="login-card">
      <h2>Login</h2>
      <h3>Enter your credentials</h3>
      <form class="login-form">
        <input
          spellcheck="false"
          class="control"
          type="text"
          placeholder="Username"
          onChange={name}
          onSubmit={ (e) => e.preventDefault() } 
        />

        <button onSubmit={ (e) => e.preventDefault() }   onClick={logg ? onLogin : nolog   } class="control" type="button">LOGIN</button>
      </form>
    </div>

    <div className="image">
    <img className="fondo" src="/fondo.webp" alt="fondo marvel/dc" />
    </div>

    </div>
  )
}
