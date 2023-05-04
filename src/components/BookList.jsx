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
    <div className="mt-8 min-w-[90vw] max-w-6xl grid md:grid-cols-3 gap-8 justify-self-center">
      {books.map((book, index) => {
        return <Book {...book} key={index} />
      })}
    </div>
  )
}

export default BookList
