import React from 'react';
import ContentLoader from 'react-content-loader';

const BookSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={480}
    viewBox="0 0 280 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="59" y="262" rx="0" ry="0" width="210" height="53" />
    <rect x="87" y="-1" rx="0" ry="0" width="162" height="253" />
    <rect x="73" y="324" rx="0" ry="0" width="192" height="31" />
  </ContentLoader>
);

export default BookSkeleton;
