import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import NavBarTabs from './components/NavBarTabs';
import Characters from './components/Characters';
import Locations from './components/Locations';
import Newspaper from './components/Newspaper';
import PoliceReport from './components/PoliceReport';
import Rules from './components/Rules';
import Leaderboard from './components/Leaderboard';
import Login from './components/Login';
import Registration from './components/Registration';
import TitleScreen from './components/TitleScreen';
import Step1 from './components/Step1';

function App() {
  return (
    <div>
      <Stack direction="horizontal" gap={3}>
        <div className="p-2">
          <h1 className='header'>DevTown Murder Mystery</h1>
        </div>
        <Leaderboard />
        <Login />
        <Registration />
      </Stack>

      <Stack direction="horizontal" gap={3}>
        <div className="p-2"></div>
      </Stack>

      <NavBarTabs />

      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/newspaper" element={<Newspaper />} />
        <Route path="/police-report" element={<PoliceReport />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>

      <div>
        <TitleScreen />
      </div>
    </div>
  );
}

export default App;

