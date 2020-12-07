import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SearchBtn extends Component {
    render() { 
        return (

            //This Link to search page by using a router
            <div className="open-search">
            <Link to = '/search'>Add a book</Link>
            </div>
         );
    }
}

export default SearchBtn;