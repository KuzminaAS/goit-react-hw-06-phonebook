import { ADD_TO_CONTACT, DELETE_CONTACT, CHANGE_FILTER } from './constants';
import { createAction } from '@reduxjs/toolkit';
import shortid from "shortid";

// export const addContact = ({ name, number }) =>
// ({
//         type: ADD_TO_CONTACT,
//         payload: {
//         id: shortid.generate(),
//         name,
//         number
//       }
// })
export const addContact = createAction(ADD_TO_CONTACT, ({ name, number }) => {
  return {
     payload: {
        id: shortid.generate(),
        name,
        number
      }
     }
})

// export const deleteContact = (index) => ({
//      type: DELETE_CONTACT,
//      payload: index
// })

export const deleteContact = createAction(DELETE_CONTACT);

export const changeFilter = createAction(CHANGE_FILTER);

// export const changeFilter = (value) => ({
//      type: CHANGE_FILTER,
//      payload: value
// })

