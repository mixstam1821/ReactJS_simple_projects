import React, { useState, useEffect } from "react";

const App = () => {
  // Define your list of quotes
  const myQuotes = [
    {
      content: "The only true wisdom is in knowing you know nothing.",
      author: "Socrates",
    },
    {
      content: "Happiness depends upon ourselves.",
      author: "Aristotle",
    },
    {
      content: "The unexamined life is not worth living.",
      author: "Socrates",
    },
    {
      content: "Know how to listen, and you will profit even from those who talk badly.",
      author: "Plato",
    },
    {
      content: "Wealth consists not in having great possessions, but in having few wants.",
      author: "Epictetus",
    },
    {
      content: "He who is not contented with what he has, would not be contented with what he would like to have.",
      author: "Socrates",
    },
    {
      content: "It is the power of the mind to be unconquerable.",
      author: "Seneca",
    },
    {
      content: "Life must be lived as play.",
      author: "Plato",
    },
    {
      content: "The way up and the way down are one and the same.",
      author: "Heraclitus",
    },
    {
      content: "Waste no more time arguing about what a good man should be. Be one.",
      author: "Marcus Aurelius",
    },
    {
      content: "The only thing that I know is that I know nothing.",
      author: "Socrates",
    },
    {
      content: "What we achieve inwardly will change outer reality.",
      author: "Plutarch",
    },
    {
      content: "He who is not a good servant will not be a good master.",
      author: "Plato",
    },
    {
      content: "All men's souls are immortal, but the souls of the righteous are immortal and divine.",
      author: "Socrates",
    },
    {
      content: "Happiness is not an ideal of reason, but of imagination.",
      author: "Immanuel Kant",
    },
    {
      content: "There is only one good, knowledge, and one evil, ignorance.",
      author: "Socrates",
    },
    {
      content: "The greatest wealth is to live content with little.",
      author: "Plato",
    },
    {
      content: "One thing I know, that I know nothing. This is the source of my wisdom.",
      author: "Socrates",
    },
    {
      content: "Life contains but two tragedies. One is not to get your heart's desire; the other is to get it.",
      author: "Socrates",
    },
    {
      content: "Education is the kindling of a flame, not the filling of a vessel.",
      author: "Socrates",
    },
  ];
  

  // Set initial quote state to the first quote in the list
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Function to get the next quote from your list
  const getNextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % myQuotes.length);
  };

  // Function to tweet the current quote
  const tweetQuote = () => {
    const currentQuote = myQuotes[currentQuoteIndex];
    const twitterUrl = `https://twitter.com/intent/tweet?text=${currentQuote.content} - ${currentQuote.author}`;
    window.open(twitterUrl, "_blank");
  };

  useEffect(() => {
    // Fetch quotes from your API or use the local list directly
  }, []);

  const { content, author } = myQuotes[currentQuoteIndex];

  return (
    <div className="box-centerside">
      <div className="text">
        <p>{content}</p>
      </div>
      <div className="author">
        <h5>{author}</h5>
        <div className="button-container">
          <button className="twitter-button" onClick={tweetQuote}>
            <i className="fab fa-twitter"></i>
          </button>
          <button onClick={getNextQuote}>New Quote</button>
        </div>
      </div>
    </div>
  );
};

export default App;
