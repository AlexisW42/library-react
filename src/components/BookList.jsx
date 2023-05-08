import Book from './Book'

function BookList(props) {
  const { books } = props

  return (
    <div className="mt-8 min-w-[90vw] max-w-6xl grid md:grid-cols-3 gap-8 justify-self-center">
      {books.map((book, index) => {
        return <Book {...book} key={index} />
      })}
    </div>
  )
}

export default BookList
