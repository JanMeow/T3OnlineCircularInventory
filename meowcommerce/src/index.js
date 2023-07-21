import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';



import App from './App';
import { UserProvider } from './context/userContext';
import { ProductsProvider } from './context/productsContext';
import { CartProvider } from './context/cartContext';
import { SearchProvider } from './context/searchContext';

import reportWebVitals from './reportWebVitals';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <SearchProvider>
          <ProductsProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </ProductsProvider>
        </SearchProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);


// by warping our router around the element we control what to be render and what not when router changes
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
