import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';
import "./HeaderComponent.css"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class HeaderComponent extends React.Component {

    render() {
        return (
            <div className="header">
                <AppBar position="static" color="inherit">
                    <Toolbar>
                        <Typography variant="h6">
                            MyList
                        </Typography>
                        <Typography>
                            <Link className="nav-item nav-link" to="/">Main</Link>
                        </Typography >
                        <Typography color='inherit'>
                            <Link className="nav-item nav-link" to="/movies">Movies</Link>
                        </Typography >
                        <Typography color='inherit'>
                            <Link className="nav-item nav-link" to="/series">Series</Link>
                        </Typography >
                        <Typography color='inherit'>
                            <Link className="nav-item nav-link" to="/addItem">Add new item</Link>
                        </Typography >
                    </Toolbar>
                </AppBar >
            </div >
        )
    }

}

export default HeaderComponent;