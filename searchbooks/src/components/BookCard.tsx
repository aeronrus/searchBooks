import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/components/_book-block.scss';

interface BookCardProps {
  key: string;
  id: string;
  title: string;
  imgUrl: string;
  authors: string[];
}

const BookCard: React.FC<BookCardProps> = ({ id, title, imgUrl, authors }) => {
  const author = authors && authors[0];
  return (
    <div className="book-block-wrapper">
      <div className="book-block">
        <img className="book-block__image" src={imgUrl} alt="The cover of the book is missing" />
        <h4 className="book-block__title">{title}</h4>
        <div className="book-block__bottom">
          <div>Authors: {author} </div>
          <Link to={`book/${id}`}>
            <button className="button button--outline button--add">
              <span>Подробнее</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
