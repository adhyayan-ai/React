import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return (
        <nav className="navbar navbar-light bg-light"   >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Cart</a>
            </div>
            <span className="bg bg-light m-2">Unique items: {this.props.totalCounters}</span>
      </nav>
      );
    }
}
 
export default NavBar;