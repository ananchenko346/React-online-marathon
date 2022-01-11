const ignoreAddIfOddMiddleware = storeAPI => next => action => {
  const {counter} = storeAPI.getState();

  if (action.type === 'ADD_5' && counter % 2 == 0) return next(action);
  if (action.type === 'ADD_5' && counter % 2 !== 0) return action;
  return next(action);
}

export default ignoreAddIfOddMiddleware;
