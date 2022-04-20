import Book from './book';
import AddBook from './AddBook';

const Books = () => (
  <div className="books-layout">
    <div className="books">
      <Book />
      <Book />
      <Book />
    </div>
    <AddBook />
  </div>
);

export default Books;
