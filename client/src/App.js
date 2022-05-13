import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'
import './index.css'

// PAGES
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

// Components
import NavHeader from './components/nav/navHeader'

function App() {
  return (

    <Router>
        <NavHeader />
        <Routes>
          <Route exact path="/" element={ <Home/> } />
          <Route exact path="/login" element={ <Login/> } />
          <Route exact path="/register" element={ <Register/> } />
        </Routes>
    </Router>
  );
}

export default App;
