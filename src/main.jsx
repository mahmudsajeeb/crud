import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Login from './Login.jsx';
import SignIn from './Sigin.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
     <AuthProviders>
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </Router>
    </AuthProviders>
  </React.StrictMode>,
)
