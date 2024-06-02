import './App.css';
import { createContext, useState, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import PrivateRoute from './components/PrivateRoute';
import BuilderPage from './pages/BuilderPage';


export const UserDataContext = createContext();

function App() {
  const [userData, setUserData] = useState({});
  const [templateId, setTemplateId] = useState(null);
  

  return (
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <UserDataContext.Provider value={{userData, setUserData, templateId, setTemplateId}}>
    <Routes>
      <Route path="/" exact={true} element={<LoginPage />}>
      </Route>
      <Route path="/register" element={<RegisterPage />}>
      </Route>
      <Route path="/home" 
        element={<PrivateRoute  >
          <HomePage />
        </PrivateRoute>}>
      </Route>
      <Route path="/builder" 
        element={<PrivateRoute  >
          <BuilderPage />
        </PrivateRoute>}>
      </Route>
    </Routes>
    </UserDataContext.Provider>
    </LocalizationProvider>
    
  );
}

export default App;
