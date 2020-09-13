import {combineReducers} from 'redux';
import commonReducers from './commonReducers';

export default combineReducers({
    common: commonReducers
});