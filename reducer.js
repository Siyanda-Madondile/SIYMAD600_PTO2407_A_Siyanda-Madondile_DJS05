import { ADD, SUBTRACT, RESET } from "./actions.js";
import { initialState } from "./state.js";

/**
 * defines what the actions do to manage the state
 *
 * @param {Object} state - the current state
 * @param {Object} action - action type
 * @returns {Object} - updated state based on the action type taken
 */
export const counterReducer = function (state = initialState, action) {
  switch (action.type) {
    // checks the add addAction and executes this code in return
    case ADD:
      return { ...state, count: state.count + 1 };

    case SUBTRACT:
      return { ...state, count: state.count - 1 };

    case RESET:
      return { ...state, count: (state.count = 0) };

    default:
      return state;
  }
};