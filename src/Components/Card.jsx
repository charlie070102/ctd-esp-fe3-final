import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from 'prop-types';


const Card = ({data: { name, username, id }, removeFromFavs}) => {

  const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem("favs")) ?.some((card) => card.id === id) || false)

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage

    const favs = JSON.parse(localStorage.getItem("favs")) || []

    if(!favs.some((card) => card.id == id)){
      favs.push({ name, username, id })

    localStorage.setItem("favs", JSON.stringify(favs))
    setFavorite(true)
    }else{
      const newFav = favs.filter((card) => card.id !== id)
      localStorage.setItem("favs", JSON.stringify(newFav))
      setFavorite(false)
      removeFromFavs(id);
    }
  }

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <img src="public\images\doctor.jpg" alt="Image" />
        <h3>{name}</h3>
        <p>{username}</p>
      </Link>
      <button onClick={addFav} className="favButton">{favorite ? "❤️" : "🤍"}</button>
    </div>
    // En cada card deberan mostrar en name - username y el id */}

    //* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

    //* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired,
  removeFromFavs: PropTypes.func.isRequired
};

export default Card;

