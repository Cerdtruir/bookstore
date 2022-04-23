import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{props.title}</h3>
      <h4>{props.author}</h4>
      <button onClick={() => dispatch(removeBook(props.id))} type="button">
        Remove
      </button>
    </div>
  );
};

export default Book;
