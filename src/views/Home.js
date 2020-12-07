import React from 'react';

// import * as BooksAPI from './BooksAPI'
import { getAll } from '../BooksAPI';

import SearchBtn from '../Components/SearchBtn';
import Shelf from '../Components/Shelf'
import Header from '../views/Header';

class Home extends React.Component {

    // This method for Load books from API
    async componentDidMount () {
        try {
            const books = await getAll ();
            this.props.addBooks(books);
        } catch (error) {

            console.log(error)
        }
    }
    render() { 
        return (
            <div className="list-books">
                {/* Header Component */}
                <Header />
                
                <div className="list-books-content">
                
                {/* The Home page shows 3 shelves for books */}
                    <Shelf title = "Currently Reading" books = {this.props.currentlyReading} moveTo = {this.props.moveTo}/>
                    <Shelf title = "Want To Read" books = {this.props.wantToRead} moveTo = {this.props.moveTo}/>
                    <Shelf title = "Read" books = {this.props.read} moveTo = {this.props.moveTo}/>
                </div>

                {/* Search Button Component */}
                <SearchBtn/>
            </div>
        );
    }
}
 
export default Home;