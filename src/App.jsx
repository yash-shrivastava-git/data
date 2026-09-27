import { useState } from "react";
import { ShoppingCart, Search, BookOpen } from "lucide-react";
import "./App.css";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: 449,
    emoji: "📘",
  },
  {
    id: 2,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 299,
    emoji: "📕",
  },
  {
    id: 3,
    title: "Ikigai",
    author: "Hector Garcia",
    price: 349,
    emoji: "📗",
  },
  {
    id: 4,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 399,
    emoji: "📙",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  function addToCart(book) {
    setCart([...cart, book]);
  }

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav>
        <div className="logo">
          <BookOpen />
          <span>BookVerse</span>
        </div>

        <div className="cart">
          <ShoppingCart />
          <b>{cart.length}</b>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="heroText">
          <p className="smallTitle">WELCOME TO BOOKVERSE</p>

          <h1>
            Discover Your
            <br />
            <span>Next Great Book</span>
          </h1>

          <p>
            Explore amazing books, discover new ideas and
            start your next reading adventure.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("books")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Books →
          </button>
        </div>

        <div className="heroBook">
          <div className="bigBook">
            📖
            <strong>READ</strong>
            <strong>MORE</strong>
            <small>BOOKVERSE</small>
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="searchSection">
        <div className="searchBox">
          <Search />

          <input
            type="text"
            placeholder="Search your favorite book..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      {/* BOOKS */}
      <section className="books" id="books">
        <div className="heading">
          <p>OUR COLLECTION</p>
          <h2>Popular Books</h2>
        </div>

        <div className="bookGrid">
          {filteredBooks.map((book) => (
            <div className="bookCard" key={book.id}>

              <div className="bookCover">
                <span>{book.emoji}</span>

                <h3>{book.title}</h3>

                <p>{book.author}</p>
              </div>

              <div className="bookInfo">
                <h3>{book.title}</h3>

                <p>by {book.author}</p>

                <div className="bottom">
                  <strong>₹{book.price}</strong>

                  <button
                    onClick={() => addToCart(book)}
                  >
                    Add +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="notFound">
            <h3>Book not found 😔</h3>
          </div>
        )}
      </section>

      {/* CART */}
      {cart.length > 0 && (
        <div className="cartBox">
          🛒 {cart.length} book(s) in cart
        </div>
      )}

      {/* FOOTER */}
      <footer>
        <BookOpen />
        <h2>BookVerse</h2>
        <p>Read. Learn. Grow.</p>
        <small>© 2026 BookVerse</small>
      </footer>

    </div>
  );
}

export default App;