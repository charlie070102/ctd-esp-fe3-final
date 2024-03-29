import {useContext} from 'react'
import { ContextGlobal } from './utils/global.context'

const Footer = () => {

  const {state} = useContext(ContextGlobal)

  return (
    <footer className={state.theme}>
        <p>Powered by</p>
        <img src="../../images/DH.png" alt='DH-logo' />
        <ul className='listaDos'>
          <li><img className='imagenes' src="public\images\ico-facebook.png"alt="Facebook" /></li>
          <li><img className='imagenes' src="public\images\ico-instagram.png" alt="" /></li>
          <li><img className='imagenes' src="public\images\ico-tiktok.png"alt="Facebook" /></li>
          <li><img className='imagenes' src="public\images\ico-whatsapp.png" alt="" /></li>
        </ul>
    </footer>
  )
}

export default Footer
