export type Book = {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
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
  saleInfo: {
    country: string;
    saleability: string;
    isEbook: boolean;
    buyLink: string;
  };
  accessInfo: {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: {
      isAvailable: boolean;
      downloadLink: string;
    };
    pdf: {
      isAvailable: true;
      downloadLink: string;
    };
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: false;
  };
  searchInfo: {
    textSnippet: string;
  };
};

export type Books = {
  kind: string;
  totalItems: number;
  items: Book[];
};
export interface BooksSliceState {
  items: Books[];
  status: string;
}
