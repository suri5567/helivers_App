import { configureStore } from '@reduxjs/toolkit'
import searchTermInfo from './slices/serachTermSlice'
import selectInfo from './slices/selecOptions'
import toggleuser from './slices/toggleCreateUserPage'
import cartData from './slices/cartItems'
// import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
	key: 'root',
	storage,
  };

  const rootReducer = combineReducers({
	searchData: searchTermInfo,
		selectData: selectInfo,
		toggleinfo: toggleuser,
		cartInfo: cartData,
  });

  
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
