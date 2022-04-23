import { useSelector } from 'react-redux';
import Book from './book';
import AddBook from './AddBook';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="books-layout">
      <div className="books">
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            id={book.id}
          />
        ))}
      </div>
      <AddBook />
    </div>
  );
};

export default Books;
