import BookRoot from './Component/BookRoot';

function App() {
  return (
    <div className="Container">
      <p className="Title">MY BOOK WISHLIST</p>
      <div className="Input">
        <BookRoot />
      </div>
    </div>
  );
}

export default App;