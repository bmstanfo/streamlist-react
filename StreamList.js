import React, { useState } from 'react';  // Make sure useState is imported from React
import '../styles/StreamList.css'; // Import CSS styles

function StreamList() {
  const [inputValue, setInputValue] = useState('');
  const [streamList, setStreamList] = useState([]);

  // Handle input change to update the input field
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle adding new item to the list
  const handleAddItem = (event) => {
    event.preventDefault();
    if (inputValue) {
      setStreamList([...streamList, inputValue]);
      setInputValue(''); // Clear input after adding
    }
  };

  // Handle deleting an item from the list
  const handleDeleteItem = (index) => {
    const updatedList = streamList.filter((item, i) => i !== index); // Remove item based on index
    setStreamList(updatedList); // Update the streamList state with the new array
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
          className="input-field"
        />
        <button type="submit" className="add-button">
          <i className="fas fa-plus-circle"></i> Add to List
        </button>
      </form>
      
      <div className="list-container">
        <h2>My Streaming List:</h2>
        <ul>
          {streamList.length > 0 ? (
            streamList.map((item, index) => (
              <li key={index} className="list-item">
                {item}
                {/* Add the Delete button */}
                <button onClick={() => handleDeleteItem(index)} className="delete-button">
                  Delete
                </button>
              </li>
            ))
          ) : (
            <p className="empty-message">Your list is currently empty.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default StreamList;
