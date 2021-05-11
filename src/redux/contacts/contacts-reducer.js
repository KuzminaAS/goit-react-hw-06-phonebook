import { createReducer } from '@reduxjs/toolkit';
import { ADD_TO_CONTACT, DELETE_CONTACT, CHANGE_FILTER } from './constants';
import {combineReducers} from "redux";

const items = createReducer([], {
  [ADD_TO_CONTACT]: (state, {payload}) => [...state, payload],
  [DELETE_CONTACT]: (state, {payload}) => state.filter((_, index) => index !== payload),
})

const filter = createReducer('', {
  [CHANGE_FILTER]: (_, {payload}) => payload
})

// const items = (state = [], { type, payload }) => {
//     switch (type) {
//       case ADD_TO_CONTACT:
//         return [...state, payload];

//       case DELETE_CONTACT:

//         return state.filter((_, index) => index !== payload);
      
//        default: return state;
//     }
  
//  }
    
// const filter = (state = '', {type, payload}) => {
//     switch (type) {
//       case CHANGE_FILTER:
//         return payload;
      
//        default: return state;
//     }
// }

 export default combineReducers({items,filter})