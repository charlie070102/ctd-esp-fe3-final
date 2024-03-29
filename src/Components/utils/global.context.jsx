import { createContext, useReducer } from "react";
import PropTypes from 'prop-types';


export const ContextGlobal = createContext();
 //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
const reducer = (state, action) => {
  switch (action.type) {
    case "LIGHT-THEME":
      return { ...state, theme: "light" }

    case "DARK-THEME":
      return { ...state, theme: "dark" }

    case "FETCH":
      return { ...state, data: action.payload }

    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {

  const initialState = { theme: "light", data: [] }

  const [state, dispatch] = useReducer(reducer, initialState);

  const dataApi = (url) => {
    return fetch(url)
    .then((response)=> response.json())
    .then((result)=> {
      dispatch({type:"FETCH", payload:result})
    }) 

}

return (
  <ContextGlobal.Provider value={{ state, dispatch, dataApi }}>
    {children}
  </ContextGlobal.Provider>
);
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};