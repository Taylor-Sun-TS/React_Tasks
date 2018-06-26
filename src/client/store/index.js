import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import rootReducer from 'reducers';

const config = {
	key: 'root',
	storage: storage,
    blacklist: ['movie']
};

const reducer = persistReducer(config, rootReducer);

export default () => {
	const store = createStore(
		reducer, 
		applyMiddleware(thunkMiddleware)
	);
	const persistor = persistStore(store);
	return { store, persistor };
}