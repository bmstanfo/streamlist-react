// src/components/StreamList.js
import React, { useState } from 'react';
import '../styles/StreamList.css';

function StreamList() {
  const [inputValue, setInputValue] = useState('');
  const [streamList, setStreamList] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = (event) => {
    event.preventDefault();
    if (inputValue) {
      setStreamList([...streamList, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="streamlist-container">
      <h1>Your StreamList</h1>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a movie or TV show"
        />
        <button type="submit">Add to List</button>
      </form>
      <div className="list-container">
        <h2>My Streaming List:</h2>
        <ul>
          {streamList.length > 0 ? (
            streamList.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          ) : (
            <p>Your list is currently empty.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default StreamList;
