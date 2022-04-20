const Book = () => {
  const book = {
    Name: 'The Lord of the Rings',
    Author: 'J.R.R. Tolkien',
  };

  return (
    <div>
      <img src="" alt="" />
      <h3>{book.Name}</h3>
      <h4>{book.Author}</h4>
      <button type="submit">Remove</button>
    </div>
  );
};

export default Book;
