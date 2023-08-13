import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Redux and Redux Persist
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store/index';

import history from './services/history';
import Rotas from './Routes';

// Styles
import GlobalStyles from './styles/GlobalStyles';

// Components
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter history={history}>
          <Header />
          <Rotas />
          <GlobalStyles />
          <ToastContainer autoClose={3000} className="toast-container" />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
