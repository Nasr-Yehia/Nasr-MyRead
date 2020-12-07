import React, { Component } from 'react';
import {update} from '../BooksAPI';
// import shelf from './Shelf';


class Book extends Component   {

  // The function allows users to move books between shelves
  handleMove = async event => {
    event.persist()
    try {
      const shelf = event.target.value;
      const moveResult = await update ({...this.props},shelf);
      this.props.moveTo({...this.props},shelf,moveResult)
    } catch (error) {

      console.log(error);

    }
  };
    render() {
        return (
            <li>
            <div className="book">
              <div className="book-top">

              {/* Set image cover book */}
                <div className="book-cover" style={{ 
                  width: 128,
                  height: 193,
                  /* The search works correctly when a book does not have a thumbnail*/
                  backgroundImage: `url(${this.props.imageLinks ? this.props.imageLinks.thumbnail : "" })`}}/>
                
                {/* Dropdown options to set book shelf */}
                <div className="book-shelf-changer">
                  <select onChange = {this.handleMove} value = {this.props.shelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              
              </div>

              {/* book is shown along with its title and all of its authors. */}
              <div className="book-title">{this.props.title}</div>
              <div className="book-authors">
              {/* The search works correctly when a book does not have an author */}
              {this.props.authors ? this.props.authors[0] : "No author name"}
              </div>
            </div>
            </li>
        )
    }
}
export default Book