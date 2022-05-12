import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import { Container } from 'semantic-ui-react';

// import './semanticUI/semantic.min.css'
import './App.css'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (

    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={ <Home/> } />
          <Route exact path="/login" element={ <Login/> } />
          <Route exact path="/register" element={ <Register/> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
