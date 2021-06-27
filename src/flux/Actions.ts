import type { PokemonInfoState } from "./State"

type SearchAction = "Fetch";
type WriteAction = "Write";
type Actiontypes = SearchAction | WriteAction;


export { SearchAction, WriteAction, Actiontypes };

type Action = {
  type: Actiontypes;
  payload?: { inputquery?: string
              pokemoninfo?: PokemonInfoState};
};

export default Action;
