// src/index.tsx

import App from './App';
// import store, { persistor } from './redux/store';
import store from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
// const { PersistGate } = require('redux-persist/integration/react');


const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}