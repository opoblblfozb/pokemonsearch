import React, { useContext } from "react";

import Context from "./flux/Context";

export default function PokemonInfo (props){
    const {state, dispatch} = useContext(Context);

    return (
        <div>
            <p><PlainText title={"id"} text={state.pokemoninfo.id}/></p>
            <p><PlainText title={"name"} text={state.pokemoninfo.pokename}/></p>
            <p>
            <Image url={state.pokemoninfo.frontimgurl}/>
            <> </>
            <Image url={state.pokemoninfo.backimgurl}/>
            </p>
            <p><UnorderedList title={"abilities"} list={state.pokemoninfo.abilities}/></p>
            <p><UnorderedList title={"items"} list={state.pokemoninfo.items}/></p>
        </div>
    );
}

function PlainText(props){
    return <text>{props.title}:{props.text}</text>
}

function Image(props){
    return <img src={props.url} width="100" height="100" />
}

function UnorderedList(props){
    let litags = props.list.map((elem) => <li>{elem}</li>)
    return (
        <div>
            <text>{props.title}:</text>
        <ul>
            {litags}
        </ul>
        </div>
    )
}