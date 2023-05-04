function Book(props) {
  const { title, author, pages, read } = props
  return (
    <div className="bg-slate-50 dark:bg-slate-800 dark:text-gray-200 rounded-md p-8 text-center h-fit w-[90vw] md:w-auto">
      <h2 className="mt-4">{title}</h2>
      <p>{author}</p>
      <p>pages: {pages}</p>
      <p>{read ? 'read yet' : 'not read yet'}</p>
    </div>
  )
}

export default Book
