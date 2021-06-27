import React from "react";
import { useContext } from "react";
import Context from "./flux/Context";
import { PokemonInfoState } from "./flux/State";

export default function SearchBox(){
    const {state, dispatch} = useContext(Context)

    function texthandler(e){
        dispatch({type:"Write",
         payload:{inputquery: e.target.value}})
    }
    function searchhandler(e){
        fetchpokeinfo(state.searchbox.query, dispatch)
    }
    return (
        <div>
            <input type="text"  value={state.searchbox.query} onChange={(e) => texthandler(e)}/>
            <button type="button" onClick={(e)=>searchhandler(e)}>検索</button>
        </div>
    );
}

function fetchpokeinfo(query:string, dispatch){
    let uri = "https://pokeapi.co/api/v2/pokemon/" + query
    fetch(uri)
        .then((res) => res.json())
        .then(function(jsdata){
            let pokeinfo = {
                id: jsdata["id"],
                pokename: jsdata["name"],
                frontimgurl: jsdata["sprites"]["front_default"],
                backimgurl: jsdata["sprites"]["back_default"],
                abilities: [],
                items: []
            }
            console.log(jsdata["abilities"])
            jsdata["abilities"].forEach((ability) => pokeinfo["abilities"].push(ability["ability"]["name"]))
            jsdata["held_items"].forEach((item) => pokeinfo["items"].push(item["item"]["name"]))
            console.log()
            dispatch({type:"Fetch",
                    payload:{pokemoninfo: pokeinfo}})
        })
}