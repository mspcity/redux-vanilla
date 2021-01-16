const redux = require('redux');
const reduxLogger = require('redux-logger')
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

// actions
//action-types
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER'
const addSubscriber = () => {
  return {
    type: 'ADD_SUBSCRIBER'
  }
}
// reducers
const subscriberState = {
  subscribers : 365
}
const subscriberReducer = (state=subscriberState, action) => {
  switch(action.type){
    case ADD_SUBSCRIBER:
      return {
        ...state,
        subscribers: state.subscribers + 1
      }
    default: return state;
  }
}
//store
const store = createStore(subscriberReducer, applyMiddleware(logger));

//subscribe - view - dispatch
// store.subscribe(() => {
//   console.log('subscribe ==>>', store.getState())
// })

store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());

