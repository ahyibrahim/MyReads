import React from "react";

const index = ({ title, authors, cover, bookShelfChanged, shelf }) => {
  const onChangeSelect = (event) => {
    if (event.target.value === "move") return;
    console.log(event.target.value);
    bookShelfChanged(event.target.value);
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${cover})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select value={shelf} onChange={onChangeSelect}>
            <option value="move">Move to</option>
            <option value="currentlyReading">Currently Reading </option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};

export default index;
