import { useEffect, useState } from 'react'
import Book from './Book'
import booksArray from './booksArray'

function BookList() {
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
    <div>
      {books.map((book, index) => {
        return <Book {...book} key={index} />
      })}
    </div>
  )
}

export default BookList
