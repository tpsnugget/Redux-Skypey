import React from 'react';
import Sidebar from "./Sidebar"
import Main from "./Main"
import store from "./store"
import _ from "lodash"

import './App.css';

const App = () => {

  const { contacts } = store.getState()

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
}

export default App;
