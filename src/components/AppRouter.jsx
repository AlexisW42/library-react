import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import About from './About'
import BookList from './BookList'
import AddBooksButton from './AddBooksButton'
import booksArray from './booksArray'

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
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/library-react/'}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BookList
                books={books}
                searchText={searchText}
                setBooks={setBooks}
              />
              <AddBooksButton />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter
