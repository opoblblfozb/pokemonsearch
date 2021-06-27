import React from "react";

import { GlobalState } from "./State";

import Action from "./Actions";

export type Contexttype = {
  state: GlobalState,
  dispatch: (action: Action) => void,   
}

const Context = React.createContext({} as Contexttype);
export default Context