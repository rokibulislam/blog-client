import React from 'react'
import AppRoutes from './approutes'
import Navigation from './components/navigation'

const App = () => {
  return (
    <div className="App">
        <div>
          <Navigation  />
        </div>
        <AppRoutes />
    </div>
  );
}

export default App;
