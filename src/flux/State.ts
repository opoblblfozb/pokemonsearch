export type SearchBoxState = {
    query: string
}

export type PokemonInfoState = {
    id: string,
    pokename: string,
    frontimgurl: string,
    backimgurl: string,
    abilities: string[],
    items: string[]
}


export type GlobalState = {
    searchbox: SearchBoxState,
    pokemoninfo: PokemonInfoState    
}

const inititalState: GlobalState = {
    searchbox: {
        query: "25"
    },
    pokemoninfo: {
        id: "25",
        pokename: "pikachu",
        frontimgurl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        backimgurl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
        abilities: ["static", "lightning-rod"],
        items: ["oran-berry", "light-ball"],
    }
}

export default inititalState