import { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function BooksResults() {
  const { search } = useParams()
  const [books, setBooks] = useState(null)

  useLayoutEffect(() => {
    axios
      .request(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
      .then((response) => {
        setBooks(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [search])

  return <div>BooksResults</div>
}
export default BooksResults
