import React, {Component} from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            
            // This is the header of the home page. 
            <div className="list-books-title">
            <h1>MyReads</h1>
            </div>
        );
    }
}
 
export default Header;