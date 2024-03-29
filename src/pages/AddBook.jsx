import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddBook() {
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState(null)

  const handleChange = (event) => {
    setSearchText(event.target.value)
  }

  const search = () => {
    navigate(`/addbook/${searchText}`)
  }

  return (
    <div className="mb-8 mt-8 grid min-w-[90vw] max-w-6xl grid-flow-row self-center justify-self-center rounded-md bg-slate-50 p-8 text-center dark:bg-slate-800 dark:text-gray-200">
      <form
        onSubmit={search}
        className="relative w-fit justify-center self-center justify-self-center"
      >
        <div className="relative w-fit justify-center self-center justify-self-center">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-500"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-books"
            className="w-[19rem] rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 md:w-80"
            placeholder="Search for books to add to your library"
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 max-h-min w-fit max-w-min justify-center self-center justify-self-center rounded-lg border border-gray-300 bg-indigo-900 p-2 text-gray-200 dark:bg-blue-800"
        >
          AddBook
        </button>
      </form>
    </div>
  )
}
export default AddBook
