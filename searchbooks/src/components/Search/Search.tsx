import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchBooks } from '../../redux/books/booksSlice';
import { useAppDispatch } from '../../redux/store';

const Search: React.FC = () => {
  //  const searchValue = useSelector(fetchBooks);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const {items, status} = useSelector((state)=>{state.})

  const onClickSearch = () => {
    try {
      const data = dispatch(fetchBooks());
    } catch (error) {
      console.log(error);
      alert('Sorry, we have a server problems');
    }
  };

  return (
    <div className="container">
      <input ref={inputRef} value={value} placeholder="Поиск пиццы"></input>
      <button onClick={onClickSearch}>Search</button>
    </div>
  );
};

export default Search;
