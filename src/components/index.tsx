import React, {FC} from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/MainPage/MainPage';
import {Provider} from 'react-redux';
import store from './tools/store'


ReactDOM.render(
  <Provider store = {store}>
    <MainPage />
  </Provider>,
  document.getElementById('root')
);

