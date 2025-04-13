import { store } from "./store.js";
import { ADD, SUBTRACT, RESET } from "./actions.js";

/**
 * runnin the code with some dispatching of actions on the store
 */
store.dispatch({ type: ADD });
store.dispatch({ type: ADD });
store.dispatch({ type: SUBTRACT });
store.dispatch({ type: RESET });