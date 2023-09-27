import { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ResultingBook from '../components/ResultingBook'
import Spinner from '../components/Spinner'

function BooksResults(props) {
  const { search } = useParams()
  const [books, setBooks] = useState(null)
  const [error, setError] = useState(null)

  useLayoutEffect(() => {
    axios
      .request(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
      .then((response) => {
        setBooks(response.data.items)
        // console.log(response.data.items)
      })
      .catch((error) => {
        setError(error)
        console.error(error)
      })
  }, [search])

  function evaluate() {
    if (error) return error.message
    else if (books != null) {
      if (books.length === 0) {
        return 'there is no results'
      }
    }
    return <Spinner />
  }

  return (
    <div className="self-center justify-self-center">
      {books
        ? books.map((book) => {
            return (
              <ResultingBook
                {...book}
                key={book.id}
                setBooks={props.setBooks}
              />
            )
          })
        : evaluate()}
    </div>
  )
}

export default BooksResults
