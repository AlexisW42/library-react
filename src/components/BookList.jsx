import Book from './Book'

function BookList(props) {
  const { books, searchText } = props
  const foundBooks = filterBooks(books, searchText)

  function filterBooks(booksArr, text) {
    if (text) return booksArr.filter((book) => book.title.includes(text))

    return booksArr
  }

  return (
    <div className="mb-8 mt-8 grid min-w-[90vw] max-w-6xl gap-8 justify-self-center md:grid-cols-3">
      {foundBooks.map((book, index) => {
        return <Book {...book} key={index} />
      })}
    </div>
  )
}

export default BookList
