import Layout from "./components/Layout"
import Transition from './components/Transition'
import { Routes, Route, useLocation } from 'react-router-dom'

import {AnimatePresence, motion} from 'framer-motion';
import Home from "./pages";
import Skills from "./pages/skills";


function App() {

  const location = useLocation()

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} className="h-full">
          <Transition />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="services" element={<Skills />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default App
