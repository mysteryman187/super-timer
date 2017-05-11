import { combineReducers } from 'redux';
import nav from './nav';
import running from './running';

export default combineReducers({
    running,
    nav
});