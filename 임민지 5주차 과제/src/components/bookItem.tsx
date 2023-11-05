enum Genre {
  humanitites = "인문",
  fantasy = "판타지",
  selfDevelop = "자기계발",
}

type Book = {
  Id: number;
  title: string;
  author: string;
  genre: Genre;
};

type BookItemProps = {
  book: Book;
};

function BookItem({ book }: BookItemProps) {
  return (
    <div className="book-item">
      <p>{book.title}</p>
      <p>{book.author}</p>
      <p>{book.genre}</p>
    </div>
  );
}

export default BookItem;
