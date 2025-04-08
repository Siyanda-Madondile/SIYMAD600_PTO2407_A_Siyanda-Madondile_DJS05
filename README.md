# DJS05 Project Brief: Building a Redux-Inspired Store for a Tally App

## Overview of the Approach:
In the provided setup, the script.js file interacts with the store by dispatching actions that alter the state. For example:

- javascript
  -Copy
  -store.dispatch({ type: ADD });
  -store.dispatch({ type: ADD });
  -store.dispatch({ type: SUBTRACT });
  -store.dispatch({ type: RESET });

## The following components work together in this state management system:

- state.js:
  -This file holds the initial state of the application in an object, such as { count: 0 }.

- actions.js:
  -It defines various action types that the reducer can use to modify the state. In this case, we have the actions ADD, SUBTRACT, and RESET.

- reducer.js:
  -The reducer function is responsible for determining how the state changes based on the dispatched action. It takes the current state and action as parameters, returning a new state accordingly.

- store.js:
  -This file initializes the store with the reducer and includes mechanisms to log state changes whenever an action is dispatched. The store provides key functions:

   -getState(): Retrieves the current state.

   -dispatch(action): Sends an action to update the state.

   -subscribe(listener): Registers a listener function that is triggered whenever the state changes.

- scripts.js:

  -This file handles the initial setup by importing the necessary modules: store, actions, and state management functions.

  -It dispatches actions like ADD, SUBTRACT, and RESET and logs the state changes using getState() to verify the updates.

## How It Works:

- Initial State: The state is initialized with { count: 0 }, and the initial state is logged to the console. 
- Dispatching Actions: Actions like ADD, SUBTRACT, and RESET are dispatched to modify the state.
- State Updates: The reducer processes these actions and returns the updated state, which is then logged to the console to show the changes.

## Evaluation Criteria
- **Correctness**: Your implementation should correctly handle the scenarios as outlined in the user stories.
- **Code Quality**: Use of functional programming principles, clear naming conventions, and code organization.
- **Documentation**: Clarity of your approach and reflections in the README.md.

