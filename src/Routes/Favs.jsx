import { useState, useEffect, useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { state } = useContext(ContextGlobal)
  const [favsCards, setFavsCards] = useState([]);

  
  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavsCards(storedFavs);
  }, []);

  
  const removeFromFavs = (idToRemove) => {
    const updatedFavs = favsCards.filter((card) => card.id !== idToRemove);
    setFavsCards(updatedFavs);
    localStorage.setItem("favs", JSON.stringify(updatedFavs));
  };



  return (
    <main className={state.theme} >
      <div className="favs">
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {favsCards.map((card) => (
          <Card key={card.id} data={card} removeFromFavs={removeFromFavs} />
        ))}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
      </div>
    </main>
  );
};

export default Favs;