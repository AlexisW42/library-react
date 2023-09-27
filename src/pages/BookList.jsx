import Book from '../components/Book'
import NeedToAdd from '../components/NeedToAdd'

function BookList(props) {
  const { books, searchText } = props
  const foundBooks = filterBooks(books, searchText)

  function filterBooks(booksArr, text) {
    if (text) return booksArr.filter((book) => book.title.includes(text))

    return booksArr
  }

  return (
    <>
      {books.length == 0 ? (
        <NeedToAdd />
      ) : (
        <div className="mb-8 mt-8 grid min-w-[90vw] max-w-6xl gap-8 justify-self-center md:grid-cols-3">
          {foundBooks.map((book) => {
            return <Book {...book} key={book.id} />
          })}
        </div>
      )}
    </>
  )
}

export default BookList
