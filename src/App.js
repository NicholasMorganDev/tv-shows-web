import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './scenes/Home';
import SignUp from './scenes/SignUp';
import Login from './scenes/Login';
import AddShow from './scenes/AddShow';
import { useState } from 'react';

export default function App() {
  const [shows, setShows] = useState();
  const [users, setUsers] = useState();
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home shows={shows} setShows={setShows}/>} />
        <Route path="/signup" element={<SignUp setUsers={setUsers} />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/addShow" element={<AddShow setShows={setShows} />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

