import React from 'react'
import AppRoutes from './approutes'
import Navigation from './components/navigation'

const App = () => {
  return (
    <div className="App">
        <Navigation  />
        <div className="container">
          <AppRoutes />
        </div>
    </div>
  );
}

export default App;
