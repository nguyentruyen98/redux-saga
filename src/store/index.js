import { createStore, applyMiddleware, compose } from 'redux';
import createMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';

import rootReducer from '../reducers/index';
const configureStore = () => {
    const sagaMiddleware = createMiddleware();
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__(),
        )
    );
    sagaMiddleware.run(rootSaga);
    return store;
}
export default configureStore;