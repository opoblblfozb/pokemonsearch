import React from "react";

import Action from "./Actions";

import type GlobalState from "./State";
import type SearchBoxState from "./State";
import type { PokemonInfoState } from "./State";


export default function reducer(state, action){
    switch(action.type){
        case "Fetch": {
            return {searchbox: state.searchbox, pokemoninfo: action.payload.pokemoninfo }
        }
        case "Write": {
            let newquery = action.payload.inputquery
            return {searchbox: {query: newquery}, pokemoninfo: state.pokemoninfo}
        }
        default : 
            return state;
    }
}

