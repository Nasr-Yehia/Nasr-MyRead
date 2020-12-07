import React, { Component } from 'react';
// import Book component';
import Book from './Book';

class shelf extends Component {

  render() { 
    return (
      <div className="bookshelf">
      <h2 className="bookshelf-title">{this.props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">

        {/* Each book is shown on the correct shelf */}
          {this.props.books && this.props.books.map(book => 
          <Book key = {book.id} {...book} moveTo = {this.props.moveTo} />
          )}

        </ol>
      </div>
    </div>
    );
  }
}
 
export default shelf;