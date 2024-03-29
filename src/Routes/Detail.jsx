import React from 'react'
import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {


  const params = useParams();
  
 // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const { state, dataApi } = useContext(ContextGlobal)

  const getDentist = async () => {
    await dataApi(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  }

  useEffect(() => {
    getDentist()

  }, [params])

  return (
    <main className={state.theme}>
      <div className='detail'>
        <h1>Detalle del dentista {state.data.id}</h1>
        <img src="../../public\images\doctor.jpg" alt="Image" />
        <table>
          <tbody>
            <tr>
              <th>Nombre</th>
              <td>{state.data.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{state.data.email}</td>
            </tr>
            <tr>
              <th>Teléfono</th>
              <td>{state.data.phone}</td>
            </tr>
            <tr>
              <th>Sitio Web</th>
              <td>{state.data.website}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
    /* aqui deberan renderizar la informacion en detalle de un user en especifico */
    /* Deberan mostrar el name - email - phone - website por cada user en especifico */
  )
}

export default Detail