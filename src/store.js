import { createStore, applyMiddleware } from 'redux';
// Wir haben das Paket redux-devtools-extension mit npm installiert und hier wird es importiert:
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';


import reducer from './reducers/reducers'

const middleware = [thunk]
// middleware, die wir in der App brauchen  und dev tools
const composedEnhancer = composeWithDevTools(applyMiddleware(...middleware))

const store = createStore(reducer,composedEnhancer)

export default store;