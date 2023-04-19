import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookSkeleton from '../components/BookSkeleton.tsx';
//import Categories from '../components/Categories';
//import Sort from '../components/Sort';
import { selectBooks } from '../redux/books/booksSlice.tsx';
import { selectFilter, setStartIndex } from '../redux/filter/filterSlice';

import '../scss/app.scss';
import BookCard from '../components/BookCard';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { books, totalItems } = useSelector(selectBooks);
  const { status } = useSelector(selectBooks);
  const onClickPagination = () => {
    // dispatch(setStartIndex(30));
  };
  const booksList = books.map((item) => (
    <BookCard
      key={item.id}
      id={item.id}
      title={item.volumeInfo.title}
      imgUrl={item.volumeInfo.imageLinks?.smallThumbnail}
      authors={item.volumeInfo.authors}
    />
  ));

  const skeletonList = [...new Array(10)].map((_, index) => <BookSkeleton key={index} />);

  //const { categoryId, sortId } = useSelector(selectFilter);

  console.log(books);
  return (
    <div className="content">
      <div className="content__top"></div>
      <div>Total books: {totalItems}</div>
      <div className="content__items">{status === 'loading' ? skeletonList : booksList}</div>
      <div className="pagination">
        <button className="button button--outline button--add">
          <h2 onClick={onClickPagination}>Load more </h2>
        </button>
      </div>
    </div>
  );
};
export default Home;
