import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { pullBooks } from '../redux/books/books';
import Book from './book';
import AddBook from './AddBook';

const Books = () => {
  const dispatch = useDispatch();
  let booksArray = [];

  useEffect(() => {
    dispatch(pullBooks());
  }, []);

  const booksObject = useSelector((state) => state.books);
  booksArray = Object.keys(booksObject);

  return (
    <div className="books-layout">
      <div className="books">
        { booksArray.map((book) => (
          <Book
            key={book}
            title={booksObject[book][0].title}
            author={booksObject[book][0].author}
            id={book}
          />
        ))}
      </div>
      <AddBook />
    </div>
  );
};

export default Books;
