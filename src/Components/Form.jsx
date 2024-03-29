import { useState } from "react";
import PropTypes from 'prop-types';



const Form = ({ addOnSubmit }) => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.length < 5 || !validEmail(email)) {
      setError("Por favor verifique su información nuevamente")
    } else {
      setError("Gracias " + nombre + ", te contactaremos cuanto antes vía mail")
      addOnSubmit(nombre, email);

    }
    setNombre("")
    setEmail("")
  };

  const validEmail = (email) => {
    const expresionEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    return expresionEmail.test(email)

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre completo" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="text" placeholder="Ingrese su email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <div>
          <button type="submit">Enviar</button>
        </div>
        <div>
          {error && <p className="p-form">{error}</p>}
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  addOnSubmit: PropTypes.func.isRequired
};

export default Form;
