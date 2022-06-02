import {configureStore} from '@reduxjs/toolkit';
//reducer
import users from './slices/datos/';

/* 
    Configuracion de ReduxStore
*/
export default configureStore({
    reducer: {
      users
    }
  });