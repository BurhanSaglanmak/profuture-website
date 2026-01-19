import { BrowserRouter, Routes, Route, Link } from 'react-router'
import { HomePage, NotFound } from './pages'
import './styles/index.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App