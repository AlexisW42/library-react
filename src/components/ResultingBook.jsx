import { useLayoutEffect, useState } from 'react'
import coverImagePlaceholder from '../assets/images/cover-placeholder.jpg'

function ResultingBook(props) {
  const [image, setImage] = useState(null)
  let authors =
    props.volumeInfo.authors === undefined ? [] : props.volumeInfo.authors
  useLayoutEffect(() => {
    setImage(
      props.volumeInfo.imageLinks === undefined
        ? ''
        : `${props.volumeInfo.imageLinks.thumbnail}`
    )
  }, [props.volumeInfo.imageLinks])

  return (
    <div className="m-4 flex h-fit	w-[90vw] flex-row rounded-md bg-slate-50 p-8 text-center dark:bg-slate-800 dark:text-gray-200 md:w-auto">
      {image ? (
        <img
          className="h-24 object-contain md:h-52"
          src={image}
          alt={`cover of ${props.volumeInfo.title}`}
        />
      ) : (
        <img
          className="h-24 md:h-52"
          src={coverImagePlaceholder}
          alt={`cover of ${props.volumeInfo.title}`}
        />
      )}
      <div className="mx-2 text-left md:mx-8">
        <h2 className="mt-4 text-lg font-bold">{props.volumeInfo.title}</h2>
        <p>
          {authors > 1 ? 'authors: ' : 'author: '}
          {authors.join(', ')}
        </p>
        <p>pages: {props.volumeInfo.pageCount}</p>
        <br />
        <p>{props.volumeInfo.description}</p>
      </div>
    </div>
  )
}

export default ResultingBook
