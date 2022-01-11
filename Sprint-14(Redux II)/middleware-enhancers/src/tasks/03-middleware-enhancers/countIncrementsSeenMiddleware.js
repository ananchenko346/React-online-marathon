const countIncrementsSeenMiddleware = storeAPI => next => action => {
  let count = 0;
  if (action.type == 'INCREMENT') {
    count++;
    next({type: 'INCREMENTS_SEEN', count});
  }
  return next(action);
}

export default countIncrementsSeenMiddleware;
