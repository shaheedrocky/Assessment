import {configureStore} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserSlice from './slice/UserSlice';


const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, UserSlice);

export const store = configureStore({
    reducer:{
        user: persistedReducer,
    }
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
