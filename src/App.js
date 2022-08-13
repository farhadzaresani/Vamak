import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ManagerLogin from './Pages/Logins/ManagerLogin/ManagerLogin'
import UserLogin from "./Pages/Logins/LoginUser/UserLogin"
import ManagerDashboard from './Pages/Manager/ManagerDashboard'
import Home from './Pages/Users/Home'
import MyLoans from './Pages/Users/MyLoans'
import MyAccount from './Pages/Users/MyAccount'
import Profile from './Pages/Users/Profile'
import Report from './Pages/Users/Report'
import UserDashboard from './Pages/Users/UserDashboard'
import Trunk from './Pages/Manager/Trunk'
import Loans from './Pages/Manager/Loans'
import Users from './Pages/Manager/Users'
import Reports from './Pages/Manager/Reports'
import Connections from './Pages/Manager/Connections'
import ForgetPass from './Pages/Logins/LoginUser/ForgetPass';
import SingleLoan from './Pages/Users/SingleLoan';
import Message from './Pages/Users/Message';
import ManagerForgetPass from './Pages/Logins/ManagerLogin/ManagerForgetPass';


function App() {
  
  return (
    <>
    <Router>
      <Routes>
          <Route path='' element={<UserLogin/>} />
          <Route path='/ManagerLogin' element={<ManagerLogin/>} />
          <Route path='/ForgetPassword' element={<ForgetPass/>} />
          <Route path='/ManagerForgetPass' element={<ManagerForgetPass/>}/>

        <Route path='/UserDashboard' element={<UserDashboard/>}>
          <Route path='' element={<Home/>} />
          <Route path='MyLoans' element={<MyLoans/>}/>
          <Route path='SingleLoan' element={<SingleLoan/>}/> 
          <Route path='Profile' element={<Profile/>} />
          <Route path='MyAccount' element={<MyAccount/>} />
          <Route path='Report' element={<Report/>} />
          <Route path='Message' element={<Message/>} />

        </Route>

        <Route path='/ManagerDashboard' element={<ManagerDashboard/>}>
          <Route path='' element={<Trunk/>} />
          <Route path='Loan' element={<Loans/>} />
          <Route path='Users' element={<Users/>} />
          <Route path='Reports' element={<Reports/>} />
          <Route path='Connections' element={<Connections/>} />
        </Route>

       
      </Routes>
    </Router>
  </>
  )
}

export default App
