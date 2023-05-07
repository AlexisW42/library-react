import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About'
import BookList from './BookList'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter
