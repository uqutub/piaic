import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Header } from './component';
import AppRouter from './Router';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
