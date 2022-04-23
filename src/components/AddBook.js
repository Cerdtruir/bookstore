import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [Title, setTitle] = useState('');
  const [Author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const submitBookToStore = () => {
    const newBook = {
      id: uuid(),
      title: Title,
      author: Author,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  const handleInputChange = (e) => {
    if (e.target.name === 'Title') {
      setTitle(e.target.value);
    } else if (e.target.name === 'Author') {
      setAuthor(e.target.value);
    }
  };

  return (
    <form>
      <input
        type="text"
        name="Title"
        value={Title}
        placeholder="Title"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="Author"
        value={Author}
        placeholder="Author"
        onChange={handleInputChange}
      />
      <input type="button" onClick={submitBookToStore} value="Add Book" />
    </form>
  );
};

export default AddBook;
