function Book(props) {
  const { title, author, pages, read } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>pages: {pages}</p>
      <p>{read ? 'read yet' : 'not read yet'}</p>
    </div>
  );
}

export default Book;
