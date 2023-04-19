import React, { useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import '../scss/components/_book-block.scss';
import Book from '../redux/books/types';

const BookItem: React.FC<Book> = () => {
  const [book, setBook] = useState<{
    volumeInfo: {
      title: string;
      authors: [string];
      publishedDate: number;
      industryIdentifiers: [
        {
          type: string;
          identifier: string;
        },
      ];
      readingModes: {
        text: boolean;
        image: boolean;
      };
      pageCount: number;
      printType: string;
      maturityRating: string;
      allowAnonLogging: boolean;
      contentVersion: string;
      panelizationSummary: {
        containsEpubBubbles: boolean;
        containsImageBubbles: false;
      };
      imageLinks: {
        smallThumbnail: string;
        thumbnail: string;
      };
      language: string;
      previewLink: string;
      infoLink: string;
      canonicalVolumeLink: string;
    };
  }>();
  const [loaded, setIsLoaded] = useState(false);
  const { id } = useParams();

  const getBook = async () => {
    try {
      await axios
        .get(
          `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyCmncm-PfZWBDFTmOBluAQaWct7Dfl76Io`,
        )
        .then((res) => {
          setBook(res.data);
          setIsLoaded(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBook();
  }, []);

  return loaded ? (
    <div className="content">
      <img className="content__bigImg" src={book.volumeInfo.imageLinks.thumbnail} />
      <div className="container">
        {' '}
        <h2>{book.volumeInfo.title}</h2>
        <h4>
          Authors:
          {book.volumeInfo?.authors?.map((item) => (
            <p>{item}</p>
          ))}
        </h4>
        <h4>
          Categories:
          {book.volumeInfo.categories?.map((item) => (
            <p>{item}</p>
          ))}
        </h4>
        <h4>
          Description:<p>{book.volumeInfo.description}</p>
        </h4>
      </div>
      <Link to="/">
        <button className="button button--outline button--add">Back</button>
      </Link>
    </div>
  ) : (
    <div className="content">
      <h1>
        Loading Book <br />
        Please, wait
      </h1>
    </div>
  );
};
export default BookItem;
