import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useContext(ContextGlobal)

const handlerTheme = ()=>{
  state.theme == "light"? dispatch({type:"DARK-THEME"}): dispatch({type:"LIGHT-THEME"})
}


  return (
    <nav className={state.theme}>
      <ul className='lista'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/favs">Favs</Link>
        </li>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      </ul>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handlerTheme} className='boton-nav'></button>
    </nav>
  )
}

export default Navbar