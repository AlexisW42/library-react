import { useLayoutEffect, useState } from 'react'

function AddToLocal(props) {
  const { id, title, authors, pages, image } = props
  const [exist, setExist] = useState(false)

  useLayoutEffect(() => {
    const books = JSON.parse(localStorage.getItem('books'))
    if (books) {
      books.some((book) => book.id === id) ? setExist(true) : setExist(false)
    }
  }, [exist, id])

  function AddBooktoLocal() {
    console.log('hi')
    const books = JSON.parse(localStorage.getItem('books'))
    const book = {
      id: id,
      title: title,
      author: authors,
      pages: pages,
      read: false,
      image: image,
    }

    if (books && exist == false) {
      localStorage.setItem('books', JSON.stringify([...books, book]))
    } else {
      localStorage.setItem('books', JSON.stringify([book]))
    }
    setExist(true)
    const booksn = JSON.parse(localStorage.getItem('books'))
    console.log(booksn)
    props.setBooks(booksn)
  }

  return (
    <button
      onClick={AddBooktoLocal}
      className="absolute right-0 mr-8 rounded-lg bg-indigo-900 px-4 py-2 text-gray-300 dark:bg-blue-800"
    >
      {exist ? 'Added' : 'Add'}
    </button>
  )
}
export default AddToLocal
