import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { GqlSdkMiddleware } from '../gql/gql';
import { createSessionMW, getCachedSession } from './mw/session';
import * as pages from '../pages/redux';
import * as session from './session';
import { login } from './session';
import { setToken } from '../gql/actions';

const gqlMW = GqlSdkMiddleware();
export type State = ReturnType<typeof reducer>;
const reducer = combineReducers({
  pages: pages.reducer,
  session: session.reducer
});

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();
// const __DEV__ = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
const enhancer = composeEnhancers(applyMiddleware(gqlMW, createSessionMW()));

export const store = createStore(reducer, enhancer);
export default store;

//TODO these initial setups should be in index or some dedicate setup module
const user = getCachedSession();
store.dispatch(login.create(user));
user && user.token && store.dispatch(setToken.create(user.token));
