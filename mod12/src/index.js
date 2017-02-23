import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

function reduceCounter(oldState = { value: 1 }, action) {
  console.log(action);

  switch (action.type) {
    case "update-value":
      return Object.assign({}, oldState, { value: action.payload });
    default:
      return oldState;
  }
}

var store = createStore(
  reduceCounter,
  { value: 45 },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// function loadMovies() {
//   return function(dispatch, getState) {
//     fetch("/movies.json")
//       .then(rsp => rsp.json())
//       .then(movies => dispatch(moviesLoaded(movies)));
//   };
// }
