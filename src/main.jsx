import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { Provider } from "react-redux";

import { createTheme } from '@mui/material/styles'; 
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
