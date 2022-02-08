import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import AppRoutes from './approutes'
import Navigation from './components/navigation'
import { logout, setUSER } from  './store/slices/user'
import auth from './services/authService'

const App = () => {
  var user = useSelector( state => state.auth.user );
  // const [user, setUser] = useState({})
  const dispatch = useDispatch()

  const handlelogout = () => {
    dispatch(logout());
    auth.logout();
  }
  
  const getuser = async () => {
    if( !user ) {
      user = await auth.getCurrentUser()
      dispatch( setUSER( user ) );
    }
  }
  useEffect( () => {
    getuser();
  },['user']);

  return (
    <div className="App">
        <Navigation  user={user} onlogout={ handlelogout} />
        <div className="container">
          <AppRoutes />
        </div>
    </div>
  );
}

export default App;
