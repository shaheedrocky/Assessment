import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';
import RouteWrapper from './src/components/navigation/RouteWrapper';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouteWrapper />
      </PersistGate>
    </Provider>
  );
};

export default App;
