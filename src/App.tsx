// src/App.tsx
import React, { Provider } from "react";
import { useReducer } from "react";

import SearchBox from "./SearchBox";
import PokemonInfo from "./PokemonInfo";

import inititalState from "./flux/State";
import Context, { Contexttype  } from "./flux/Context";

import reducer from "./flux/Reducer"


export default function App() {
  const [state, dispatch] = useReducer(reducer, inititalState)
  const context:Contexttype = {state, dispatch}
  //console.log(state)
  return (
    <div>
    <Context.Provider value={context}>
    <SearchBox />
    <PokemonInfo />
    </Context.Provider>
    </div>
  );
}
