import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';

class HeaderComponent extends React.Component {

    render() {
        return (
            <nav id="header" className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">MyList</a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/">Main</Link>
                        <Link className="nav-item nav-link" to="/films">Films</Link>
                        <Link className="nav-item nav-link" to="/series">Series</Link>
                        <Link className="nav-item nav-link" to="/addItem">Add new item</Link>
                    </div>
                </div>
            </nav>
        )
    }

}

export default HeaderComponent;