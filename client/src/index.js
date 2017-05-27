import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Header} from './components';
import './index.css';
import store from './store/configureStore';


injectTapEventPlugin();

// Initialize Firebase
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: ""
};

firebase.initializeApp(config);

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Header />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
