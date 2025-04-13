import { counterReducer } from "./reducer.js";

/**
 *
 * @param {Function} reducer - the reducer function that manages the state changes
 * @returns {Object} - an object with methods to access the state, subscribe, and dispatch actions
 */
function createStore(reducer) {
  /**
   * gets the current state
   * @returns {*} - the current state
   */
  let state;
  const listeners = [];

  const getState = () => state;

  /**
   * subscribes a listener to be called when the state changes
   *
   * @param {Function} listener - callback that happens when state changes
   * @returns {Function} - a function to unsubscribe listeners
   */
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  };

  /**
   * dispatches an action to update the state using the reducer
   *
   * @param {Object} action - the action to be dispatched
   */
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  // this will ensure that the state is set to the initial value defined in the reducer
  dispatch({ type: "__INIT__" });

  // return an object with methods to access the state, subscribe to changes, and dispatch actions
  return { getState, subscribe, dispatch };
}

/**
 * store instance using the 'counterReducer' to manage state
 * @type {Object}
 */
export const store = createStore(counterReducer);

// test the store
console.log("Initial State:", store.getState()); // { count: 0 }

// subscribe to the store to log the state whenever it updates
store.subscribe(() => {
  console.log("State Updated:", store.getState());
});