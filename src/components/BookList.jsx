import Book from './Book'

function BookList(props) {
  const { books } = props

  return (
    <div className="mt-8 grid min-w-[90vw] max-w-6xl gap-8 justify-self-center md:grid-cols-3">
      {books.map((book, index) => {
        return <Book {...book} key={index} />
      })}
    </div>
  )
}

export default BookList
