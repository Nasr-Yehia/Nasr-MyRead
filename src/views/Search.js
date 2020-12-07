import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {search} from '../BooksAPI'
import Book from '../Components/Book';
import {getAll} from '../BooksAPI'

class Search extends Component {

    //This constructor to assign 'this.state' directly
    constructor(props) {
        super(props);
        this.state = {
            querySearch: '',
            // add books to stats
            books : []
        }
    };

    // This is the method to handle search results.
    searchBooks = async event => {
        try {
            const querySearch = event.target.value;
            this.setState({querySearch});
            
            /* if the search input is empty,
            or invalid, it does not return any results,
            and prior search results are not shown.*/
            if (querySearch.trim()) {
                const searchResult = await search (querySearch)
                searchResult.error ? this.setState({books: []}) : this.setState({books : searchResult});
            } else {
                this.setState({books : []});
            }
            // console.log(searchResult);
        } catch (error) {
            console.log(error)
        }
    };

    // This method for Load books from API
    async componentDidMount () {
        try {
            const books = await getAll ();
            this.props.addBooks(books);
        } catch (error) {

            console.log(error)
        }
    };
    render() { 
        return (
            <div className="search-books">
            <div className="search-books-bar">
                
                {/* Go back to the home page link */}
                <Link className="close-search" to = '/Home'>
                Close
                </Link>

                {/* The search input field */}
                <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange = {this.searchBooks} value = {this.state.querySearch} />
                </div>

            </div>

            <div className="search-books-results">
                <ol className="books-grid">

                    {/* rendering  if there is books in the state */}
                    {this.state.books.length > 0 && this.state.books.map(book => 
                    {let findShelf = this.props.books.find(searchBooks => searchBooks.id === book.id)
                    
                    // Set the shelf to books results
                    findShelf ? book.shelf =  findShelf.shelf : book.shelf =  'none';
                    return <Book key = {book.id} {...book} moveTo = {this.props.moveTo} />
                    }
                    )}
                    
                    {/* Search results are not shown when the search input is empty
                    and shown text 'No Results found on the search page' */}
                    {this.state.books.length === 0 && <h1 className = {'no-search-result'}>No Results Found</h1>}
                </ol>
            </div>
        </div>
        );
    }
}
 
export default Search;