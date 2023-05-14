import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About'
import BookList from './BookList'
import { useEffect, useState } from 'react'
import booksArray from './booksArray.js'

function AppRouter({ searchText }) {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem('books'))
    if (books) {
      setBooks(books)
    } else {
      console.log(booksArray)
      setBooks(booksArray)
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <BookList
              books={books}
              searchText={searchText}
              setBooks={setBooks}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter
