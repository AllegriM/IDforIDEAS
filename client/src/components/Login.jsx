// import { useState } from "react";

function Login() {
  // const [loginData, setLoginData] = useState();

  return (
    <div>
      <h4>Login</h4>
      <form action="">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="password">Contraseña</label>
        <input id="password" type="password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
