import React, {Component} from 'react';
export const MyContext = React.createContext();

class Sql extends Component {

    //This constructor to assign 'this.state' directly
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            currentlyReading: [],
            wantToRead: [],
            read: [],
            addBooks : books => {
                
            // Filtering the "currently reading" bookshelf from all books
            const currentlyReading = books.filter(function (book) {
                return book.shelf === "currentlyReading";
            });

            // Filtering the 'want to read' bookshelf from all books
            const wantToRead = books.filter(function (book) {
                return book.shelf === "wantToRead";
            });

            // Filtering the 'read' bookshelf from all books
            const read = books.filter(function (book) {
                return book.shelf === "read";
            });

            this.setState({books,currentlyReading,wantToRead,read});
            },
            
            //This method for moving books between shelves.
            moveTo : (book,newShelf,allShelves) => {
                // console.log(newShelf)
                const newBooks = this.state.books.map(allBooks => {
                    let queryID = allShelves[newShelf].find(
                        bookID => bookID === allBooks.id
                    );
                    if (queryID) allBooks.shelf = newShelf;
                    return allBooks;
                });
                this.state.addBooks(newBooks)
            }
        };
    }
    render() { 
        return (
            <MyContext.Provider value = {{...this.state}}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}
 
export default Sql;