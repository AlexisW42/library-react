import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import About from '../pages/About'
import BookList from '../pages/BookList'
import AddBook from '../pages/AddBook'
import AddBooksButton from './AddBooksButton'
import BooksResults from '../pages/BooksResults'

function AppRouter({ searchText }) {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem('books'))
    if (books) {
      setBooks(books)
    }
  }, [])
  console.log(books)
  return (
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
      <Route path="/addbook" element={<AddBook />} />
      <Route
        path="/addbook/:search"
        element={<BooksResults setBooks={setBooks} />}
      />
    </Routes>
  )
}
export default AppRouter
