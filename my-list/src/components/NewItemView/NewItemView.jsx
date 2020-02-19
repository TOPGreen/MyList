import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { addItem } from "../../services/itemsService"
import { getFilm } from '../../services/omdbService';
import "./NewItemView.css"
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';


class NewItemView extends React.Component {

    state = {
        name: '',
        trailer: '',
        genre: 'Horror',
        plot: '',
        poster: ''
    }
    type = 'movies';

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTrailerChange = this.handleTrailerChange.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
        this.handlePlotChange = this.handlePlotChange.bind(this);
        this.handlePosterChange = this.handlePosterChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSubmit(event) {
        if (this.state.name != "" && this.state.trailer != "" && document.querySelector("#search").checked
            || this.state.name != "" && this.state.trailer != "" && this.state.genre != "" && this.state.plot != "" && this.state.poster != "") {
            addItem(this.type, this.state)
                .then(res => {
                    console.log("good");
                    return (<Redirect to="/movies" />)
                })
                .catch(rej => {
                    console.log("bad")
                });
        } else {
            alert("заполните все поля");
        }
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
        getFilm(event.target.value)
            .then(res => {
                console.log(res);
                let info = res.data;
                if (info.Response != "False") {
                    info = res.data["Search"][0];
                    document.querySelector("#posterImg").src = info.Poster;
                    this.setState({ name: info.Title, genre: info.Genre, poster: info.Poster, plot: info.Plot });
                    this.type = info.Type == "movie" ? "movies" : "series";
                }
            })
            .catch();
    }
    handleTrailerChange(event) {
        let link = event.target.value;
        let embedLink = link.replace("watch?v=", "embed/");
        this.setState({ trailer: embedLink })
    }
    handleGenreChange(event) { this.setState({ genre: event.target.value }) }
    handlePlotChange(event) { this.setState({ plot: event.target.value }) }
    handlePosterChange(event) {
        this.setState({ poster: event.target.value });
        document.querySelector("#posterImg").src = this.state.poster;
    }
    handleTypeChange(event) { event.target.value == "Movie" ? this.type = "movies" : this.type = "series"; }
    handleSearchChange(event) {
        if (event.target.checked) {
            document.querySelector("#manualSearch").style.display = "block";
            this.setState({ genre: "Ужасы", poster: "", });
        } else {
            document.querySelector("#manualSearch").style.display = "none";
        }
    }

    render() {

        return (
            <div className="row">

                <form id="form" className="col-6 offset-1" >
                    <div className="form-group">
                        <TextField id="name" label="title" onChange={this.handleNameChange} />
                    </div>
                    <div className="form-group">
                        <TextField id="trailer" label="trailer link" onChange={this.handleTrailerChange} />
                    </div>
                    <div className="form-check">
                        <FormControlLabel
                            control={
                                <Checkbox id="search" onChange={this.handleSearchChange} />
                            }
                            label="Manually"
                        />
                    </div>
                    <div id="manualSearch">
                        <div className="form-group">
                            <FormControl >
                                <InputLabel id="genre">Genre</InputLabel>
                                <Select
                                    labelId="genre"
                                    id="genre"
                                    value={this.state.genre}
                                    onChange={this.handleGenreChange}
                                >
                                    <MenuItem value="horror">Horror</MenuItem>
                                    <MenuItem value="comdey">Comedy</MenuItem>
                                    <MenuItem value="triller">Triller</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="form-group">
                            <FormControl >
                                <InputLabel id="type">Type</InputLabel>
                                <Select
                                    labelId="type"
                                    id="type"
                                    value={this.state.type}
                                    onChange={this.handleTypeChange}
                                >
                                    <MenuItem value="movie">Movie</MenuItem>
                                    <MenuItem value="series">Series</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="form-group">
                            <TextField id="trailer" label="poster link" id="poster" onChange={this.handlePosterChange} />
                        </div>
                        <div className="form-group">
                            <TextField
                                id="plot"
                                label="Description"
                                multiline
                                rows="4"
                                variant="filled"
                                onChange={this.handlePlotChange}
                            />
                        </div>
                    </div>
                    <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </form>
                <div className="col-4">
                    <img className="col-10" id="posterImg" src="https://st.kp.yandex.net/images/film_iphone/iphone360_1044906.jpg" alt="Постер" />
                </div>
            </div>
        )
    }

}

export default NewItemView;