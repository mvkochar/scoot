import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Careers, Home, Locations } from '../../pages'

const Main = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<Home />}
            />
            <Route
               path='about'
               element={<About/>} 
            />
            <Route
                path='careers'
                element={<Careers/>}
            />
            <Route
                path='locations'
                element={<Locations/>}
            />
        </Routes>
    )
}

export default Main