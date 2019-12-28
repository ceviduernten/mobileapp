import {applyMiddleware, createStore} from "redux";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import reducers from "./src/reducers";
import {persistReducer, persistStore} from "redux-persist";
import AsyncStorage from '@react-native-community/async-storage';
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
    whiteList: ['groups', 'contacts']
};

const middleware = applyMiddleware(promise, thunk);
// @ts-ignore
const pReducer = persistReducer(persistConfig, reducers);
const store = createStore(pReducer, middleware);
export const persistor = persistStore(store);
export default store;

