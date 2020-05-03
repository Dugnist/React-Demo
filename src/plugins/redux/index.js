import { Provider as _Provider, connect as _connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';

export const reducers = {};
export const initStore = () => createStore(combineReducers(reducers));

export const Provider = _Provider;
export const connect = _connect;
