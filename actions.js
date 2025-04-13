/**
 * action type for adding to the count
 * @constant {string}
 */
export const ADD = "ADD";

/**
 * action type for subtracting from the count
 * @constant {string}
 */
export const SUBTRACT = "SUBTRACT";

/**
 * action type for resetting the count
 * @constant {string}
 */
export const RESET = "RESET";

/**
 * creates an action to add to the count
 *
 * @returns {Object} - the action object with type `ADD`
 */

export const addAction = () => ({ type: ADD });

/**
 * reates an action to subtract from the count
 *
 * @returns {Object} - The action object with type `SUBTRACT`.
 */
export const subtractAction = () => ({ type: SUBTRACT });

/**
 * reates an action to reset the count
 *
 * @returns {Object} - The action object with type `RESET`.
 */
export const resetAction = () => ({ type: RESET });