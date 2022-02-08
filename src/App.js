import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import AppRoutes from './approutes'
import Navigation from './components/navigation'
import { logout } from  './store/slices/user'

const App = () => {
  const user = useSelector( state => state.auth.user );
  const dispatch = useDispatch()

  const handlelogout = () => {
    dispatch(logout());
  }

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
