import React from 'react'
import { 
    BrowserRouter as Router, 
    Route,
    Routes,
    Navigate
    } from 'react-router-dom'

import HomePage from '../Pages/HomePage'
import CodigoFPage from '../Pages/CodigoFPage'
import VictorRPage from '../Pages/VictorRPage'
import PlatziPage from '../Pages/PlatziPage'
import Youtube from '../Pages/YoutubePage'
import NavBar from '../Components/NavBar'

const AppRouter = () => {
  return (
    <Router>
      <NavBar/>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/cf" element={<CodigoFPage/>} />
            <Route path="/vr" element={<VictorRPage/>} />
            <Route path="/platzi" element={<PlatziPage/>} />
            <Route path="/youtube" element={<Youtube/>} />

            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
  )
}

export default AppRouter