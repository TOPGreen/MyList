import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

class HeaderComponent extends React.Component {

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand">MyList</a>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link">Main</a>
                        <a class="nav-item nav-link" routerLinkActive="active">Films</a>
                        <a class="nav-item nav-link" routerLinkActive="active">Series</a>
                    </div>
                </div>
            </nav>
        )
    }

}

export default HeaderComponent;