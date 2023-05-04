function Book(props) {
  const { title, author, pages, read, image } = props

  const selectImage = () => {
    return image ? (
      <img className="h-52 mx-auto" src={image} alt={`cover of ${title}`} />
    ) : (
      <img
        className="h-52 mx-auto"
        src="src/assets/images/cover-placeholder.jpg"
        alt={`cover of ${title}`}
      />
    )
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-800 dark:text-gray-200 rounded-md p-8 text-center h-fit w-[90vw] md:w-auto">
      {selectImage()}
      <h2 className="mt-4">{title}</h2>
      <p>{author}</p>
      <p>pages: {pages}</p>
      <p>{read ? 'read yet' : 'not read yet'}</p>
    </div>
  )
}

export default Book
