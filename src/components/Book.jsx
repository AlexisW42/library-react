import coverImagePlaceholder from '../assets/images/cover-placeholder.jpg'

function Book(props) {
  const { id, title, author, pages, read, image, setBooks } = props

  const selectImage = () => {
    return image ? (
      <img className="mx-auto h-52" src={image} alt={`cover of ${title}`} />
    ) : (
      <img
        className="mx-auto h-52"
        src={coverImagePlaceholder}
        alt={`cover of ${title}`}
      />
    )
  }

  function removeBook() {
    const books = JSON.parse(localStorage.getItem('books'))
    localStorage.setItem(
      'books',
      JSON.stringify(books.filter((book) => book.id != id))
    )
    setBooks(JSON.parse(localStorage.getItem('books')))
  }

  function changeRead() {
    const books = JSON.parse(localStorage.getItem('books'))
    localStorage.setItem(
      'books',
      JSON.stringify(
        books.map((book) => {
          if (book.id === id) {
            return { ...book, read: !book.read }
          } else {
            return book
          }
        })
      )
    )
    setBooks(JSON.parse(localStorage.getItem('books')))
  }

  return (
    <div className="h-fit w-[90vw] rounded-md bg-slate-50 p-8 text-center dark:bg-slate-800 dark:text-gray-200 md:w-auto">
      {selectImage()}
      <h2 className="mt-4">{title}</h2>
      <p>{author}</p>
      <p>pages: {pages}</p>
      <button
        onClick={changeRead}
        className={`mt-4 rounded px-4 ${
          read ? `bg-green-500` : `bg-slate-300 text-black`
        }`}
      >
        {read ? 'read yet' : 'not read yet'}
      </button>
      <br />
      <button className="mt-2 rounded bg-red-700 px-4" onClick={removeBook}>
        remove
      </button>
    </div>
  )
}

export default Book
