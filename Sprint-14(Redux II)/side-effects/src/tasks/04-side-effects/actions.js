import {fetchAmount} from "./api";


export function increment() {
  return { type: "INCREMENT" };
}

export function amountRequestSucceeded(amount) {
  return {type: "AMOUNT_REQUEST_SUCCEEDED", amount};
}

export function amountRequestFailed(error) {
  return {type: "AMOUNT_REQUEST_FAILED", error};
}

export function incrementThreeTimes() {
  return (dispatch) => {
    for (let i = 0; i < 3; i++) {
      dispatch({type: 'INCREMENT'});
    }
  }
}

export function dispatchIncrementIfEven() {
  return (dispatch, getState) => {
    let counter = getState().counter;
    if (counter % 2 == 0) {
      dispatch({type: 'INCREMENT'})
    }
    return null;
  }
}

export function fetchAndLoadAmount() {
  return (dispatch) => {
    fetchAmount()
      .then(data => dispatch(amountRequestSucceeded(data)))
      .catch(error => dispatch(amountRequestFailed(error)))
  }
}