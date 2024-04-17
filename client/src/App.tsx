import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CitiesTable from './components/CitiesTable';
import WeatherPage from './components/WeatherPage';

const App: React.FC = () => {
  return (
    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<CitiesTable/>} />
        <Route path="/weather/:city" element={<WeatherPage/>} />
    </Routes>
    </BrowserRouter>
    
  );
};

export default App;
