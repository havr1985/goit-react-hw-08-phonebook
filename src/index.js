import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Provider store={store}>
      <ThemeProvider theme={{}}>
        
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <PersistGate loading={null} persistor={persistor}>
          <App />
           </PersistGate>
          </BrowserRouter>
         
      <GlobalStyle/>
      </ThemeProvider>
      </Provider>
  </React.StrictMode>
);
