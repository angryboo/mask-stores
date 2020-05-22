import React from 'react';
import './App.css';
import Main from './Components/Pages/Main';
import { MapProvider } from './ContextAPI/MapContext';

function App() {
  return (
    <div className="App">
      <MapProvider>
        <Main />
      </MapProvider>
    </div>
  );
}

export default App;
