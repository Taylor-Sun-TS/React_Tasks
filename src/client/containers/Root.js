import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from 'store';
import { PersistGate } from 'redux-persist/integration/react';
import ErrorBoundary from 'ErrorBoundary';

const cStore = configureStore();

const Root = withRouter(({ history, children }) => (
    <Provider store={cStore.store}>
        <PersistGate loading={null} persistor={cStore.persistor}>
            <ErrorBoundary>
                <React.Fragment>
                    {children}
                </React.Fragment>
            </ErrorBoundary>
        </PersistGate>
    </Provider>
));

export default Root