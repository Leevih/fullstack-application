import {createStore, applyMiddleware, compose} from 'redux'
import { createLogger } from 'redux-logger'
import reducer from './reducers/root.reducer'

const loggerMiddleware = createLogger({});

let middleware = [];
if(process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, loggerMiddleware]
}
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
const store = createStore(reducer, {}, enhancer)

export default store