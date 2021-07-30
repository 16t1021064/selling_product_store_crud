import { combineReducers } from 'redux';
import productReducer from './product'
import formReducer from './form'

const rootReducer = combineReducers({
    product: productReducer,
    form: formReducer
})
export default rootReducer;
