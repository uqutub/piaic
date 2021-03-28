import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppRouter from './AppRouter';
import { Navbar } from './components';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <AppRouter />
      </div>
    </Router>
  );
}

