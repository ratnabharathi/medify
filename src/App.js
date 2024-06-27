import { useState } from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
//components
import Download from './components/Download/Download';
import MainFooter from './components/MainFooter/MainFooter';
import HomePage from './components/HomePage/HomePage';
import FindPage from './components/FindPage/FindPage';
import BookingsPage from './components/BookingsPage/BookingsPage';
//contexts
import { BookingsContext, FoundHospitalsContext } from './contexts/AllContexts';

function App() {
    const [bookings, setBookings] = useState([]);
    const [foundHospitals, setFoundHospitals] = useState({
        hospitals: [],
        cityName: "",
        stateName: "",
        noSearchYet: true
    });

    return ( <
        div className = 'App' >
        <
        BookingsContext.Provider value = {
            [bookings, setBookings] } >
        <
        FoundHospitalsContext.Provider value = {
            [foundHospitals, setFoundHospitals] } >
        <
        BrowserRouter >
        <
        Routes >
        <
        Route path = '/'
        element = { < HomePage / > }
        /> <
        Route path = '/home'
        element = { < HomePage / > }
        /> <
        Route path = '/find'
        element = { < FindPage / > }
        /> <
        Route path = '/bookings'
        element = { < BookingsPage / > }
        /> <
        /Routes> <
        /BrowserRouter> <
        /FoundHospitalsContext.Provider> <
        /BookingsContext.Provider> <
        Download / >
        <
        MainFooter / >
        <
        /div>
    );
}

export default App;