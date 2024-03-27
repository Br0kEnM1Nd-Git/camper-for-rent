import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/lib/integration/react';
import './index.css';
import App from 'App';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="camper-for-rent">
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </PersistGate> */}
    </BrowserRouter>
  </React.StrictMode>
);
