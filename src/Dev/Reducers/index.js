import {combineReducers} from 'redux';
import EnrollementReducer from './reducer-enrollements'
import ActiveEnrollementReducer from './reducer-active-enrollement'
import AddEnrollment from './reducer-add-enrollement'
const allReducers=combineReducers({
    EnrollementList:EnrollementReducer,
    activeEnrollement:ActiveEnrollementReducer,
    addnewEnrollment:AddEnrollment
})

export default function(x) {
   return allReducers;
  }