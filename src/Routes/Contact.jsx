import { useContext } from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const { state } = useContext(ContextGlobal)

  const addOnSubmit= (nombre,email)=> console.log(`Nombre: ${nombre} - Email: ${email}`);


  return (
    <main className={state.theme}>
      <div className='centrado'>
        <h2 className='titulo-contact'>Want to know more?</h2>
        <p className='sub-titulo'>Send us your questions and we will contact you</p>
        <Form addOnSubmit={addOnSubmit} />
      </div>
    </main>
  )
}

export default Contact