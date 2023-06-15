import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const LoginComponent = () => {

  const [user, setUser] = useState("");
  const [pswd, setPswd] = useState("");
  let [dataInput, setDataInput] = useState("");

  const submitThis = () => {
    if (user === "user" && pswd === "1234") {
      dataInput = {username: user, password: pswd}
      console.log("Bienvenido: "+ dataInput.username);
    } else {
      console.log("Ingrese un valor");
    }
  }

  return (
    <div>
      <form className="form-control">
        <div className="row">
          <div className="col">
            <label className="form-control" htmlFor="user">Usuario</label>
            <label className="form-control" htmlFor="password">Contraseña</label>
          </div>
          <div className="col">
            <input className="form-control field" type="text" id="user" placeholder="Inserte un usuario" value={user} onChange={(e) => setUser(e.target.value)} />
            <input className="form-control field" type="password" id="password" placeholder="Inserte una contraseña" value={pswd} onChange={(e) => setPswd(e.target.value)} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onSubmit={submitThis()}>Acceder</button>
      </form>
    </div>
  );
}

export default LoginComponent;