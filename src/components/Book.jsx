import coverImagePlaceholder from '../assets/images/cover-placeholder.jpg'

function Book(props) {
  const { title, author, pages, read, image } = props

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

  return (
    <div className="h-fit w-[90vw] rounded-md bg-slate-50 p-8 text-center dark:bg-slate-800 dark:text-gray-200 md:w-auto">
      {selectImage()}
      <h2 className="mt-4">{title}</h2>
      <p>{author}</p>
      <p>pages: {pages}</p>
      <p>{read ? 'read yet' : 'not read yet'}</p>
    </div>
  )
}

export default Book
