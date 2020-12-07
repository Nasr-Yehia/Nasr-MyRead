# MyReads Project

This is the template for the 'MyReads' project. The goal of this template is to enable users to create their own read library to help them continue reading by dividing their library into three shelves.
#### 01- Currently Reading.
#### 02- Want To Read.
#### 03- Reaf.

## Tree Project
```bash
├── CONTRIBUTING.md
├── README.md - This file. # The description for developing and use this app.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for app.
    ├── App.js # This is the root of app. Contains static HTML.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    └── Components
        ├── Book.js # This Component has contains grid book.
        ├── SearchBtn.js # This Component has contains a link to the search page.
        └── Shelf.js # This Component has contained a shelf and each book is shown.

    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    └── sql
        └── Sql.js # This provided a backend server.
    ├── views
        ├── Header.js # This Component has contains the home page header.
        ├── Home.js # This Component has contains the Home page shows 3 shelves for books.
        └── Search.js # This Component has contains srash results.
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

The provided file [`Sql.js`](src/sql/Sql.js) contains the constructor for using [`this.state`] and contains an Array for each shelf and some methods for moving books.

* [`moveTo`] # This method for moving books between shelves.

## `Home Page`
The main page shows 3 shelves for books,
each book is shown on the correct shelf,
along with its title and all of its authors.

```This method for Load books from the provided file.```
* [`componentDidMount`] 
* [`render`] # Contains:
    Header Component.
    Shows 3 shelves for books.
    Search Button Component.

### `search`
### The search page is running out of the following: 
* The search page has a search input field
* when the user types into the search field, books that match the query are displayed on the page, along with their titles and authors.
* Search results are not shown when all of the text is deleted out of the search input box.
* Invalid queries are handled and prior search results are not shown.
* The search works correctly when a book does not have a thumbnail or an author.
* The user is able to search for multiple words, such as “artificial intelligence

### Performed during the above because they contain the following:
The Serch page contains a constructor for using [`this.state`],
and this constructor has contain `querySearch` `<String>` and books array.

* Also contain Asynchronous function [`searchBooks`] to handle search result.
* Asynchronous function [`componentDidMount`] to for Load books from API.
* [`render`] has contain a link fo go to `Home page` and the conditional to rendering  if there is books in the state, and conditional to set the shelf to books results, and also has contain conditional search results are not shown when the search input is empty.