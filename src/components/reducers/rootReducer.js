import { combineReducers } from 'redux'
import testReducer from '../testing/testReducer';


const rootReducer = combineReducers({
    test: testReducer
})

export default rootReducer;