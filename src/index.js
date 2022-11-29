import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from './сonstans/theme';
import './index.css';
import App from './App';
import AuthProvider from './components/context/AuthProvider';
import store from './redux/store';
import { Provider } from 'react-redux';
import { ImNpm } from 'react-icons/im';
import { PersistGate } from 'redux-persist/integration/react';

// const theme = {
//   colors: {
//     black: "#010101",
//   },
// };
// console.log(store);
// console.log(store.getState());
// store.dispatch(increment(5));
// store.dispatch(decrement(10));
//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Provider store={store}>
          {/* <PersistGate loading={null} persistor={store.persistor}> */}
          <BrowserRouter>
            <App />
          </BrowserRouter>
          {/* </PersistGate> */}
        </Provider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
