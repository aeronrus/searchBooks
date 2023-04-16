import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks, setBooksNull } from '../redux/books/booksSlice';
import {
  selectFilter,
  setCategoryId,
  setStartIndexNull,
  setSortId,
} from '../redux/filter/filterSlice';
import '../scss/components/_header.scss';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const { categoryId, sortId, startIndex } = useSelector(selectFilter);

  const categories = ['', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
  const sorts = ['relevance', 'newest'];

  const updateInput = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = async () => {
    try {
      await dispatch(setBooksNull());
      await dispatch(setCategoryId(0));
      await dispatch(setSortId(0));
      await dispatch(setStartIndexNull(0));
      dispatch(
        fetchBooks({
          searchValue,
          categories,
          categoryId,
          sorts,
          sortId,
          startIndex,
        }),
      );
    } catch (error) {
      console.log(error);
      alert('Sorry, we have a server problems');
    }
  };

  useEffect(() => {
    dispatch(
      fetchBooks({
        searchValue,
        categories,
        categoryId,
        sorts,
        sortId,
        startIndex,
      }),
    );
  }, [categoryId, sortId, startIndex]);
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <img
            src="https://ladushki-club.ru/wp-content/uploads/f/3/4/f34ea484e2e95a981996c7ccfbd26fe1.jpeg"
            alt="SearchBooks"
          />
        </Link>
        <div className="container">
          <input
            value={searchValue}
            onChange={updateInput}
            onKeyDown={(e) => (e.key === 'Enter' ? handleSearch() : '')}
            placeholder="Search books"></input>
          <button onClick={handleSearch} className="button button--outline button--add">
            Search
          </button>
        </div>
        <div>
          <h1>Search for books</h1>
          <p>Enter the name of the book</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
