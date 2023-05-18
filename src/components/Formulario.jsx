import { useState } from "react";

const Formulario = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState(false);
  const data = {
    Email: email,
    Passwor: password,
    session: session,
  };
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("se hizo submit");
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Inicio de sesion</h1>
        <div className="input-group">
          <label htmlFor="email">Correo</label>
          <input
            type="text"
            id="email"
            placeholder="Coloque su correo por favor..."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Correo</label>
          <input
            type="password"
            id="password"
            placeholder="Coloque su contraseña por favor..."
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Iniciar Session</label>
          <input
            type="checkbox"
            id="checkbox"
            onChange={(e) => setSession(e.target.checked)}
            checked={session}
            required
          />
        </div>
        <div>
          <input type="submit" value="Iniciar" />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
