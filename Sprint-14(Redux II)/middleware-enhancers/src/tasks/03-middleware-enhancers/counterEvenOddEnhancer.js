export default function counterEvenOddEnhancer(originalCreateStore) {
  return function newCreateStore(rootReducer, preloadedState, enhancer) {
    const store = originalCreateStore(rootReducer, preloadedState, enhancer);

    const newState = () => {
      return {
        ...store.getState(),
        counterEvenOdd: (store.getState().counter % 2 == 0) ? 'even' : 'odd'
      };
    }

    return {...store, getState: newState};
  }
}
