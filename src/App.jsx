import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/Profile'
import './index.css'; // หรือชื่อไฟล์ CSS ที่คุณใช้

import Artify from './component/Artify'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Router>
          <Routes>
            <Route path="/artify" element={<Artify />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </>
      )
}

      export default App
