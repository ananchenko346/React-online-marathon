const dispatchMultipleActionsMiddleware = storeAPI => next => action => {
  const {dispatch} = storeAPI;

  if (Array.isArray(action)) {
    action.map((el) => {
      if (el.type === 'INCREMENT') {
        return dispatch(el);
      }
    })
    return action.length;
  } else {
    return next(action);
  }
}

export default dispatchMultipleActionsMiddleware;
