import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { addItem } from "../../services/itemsService"
import { getFilm } from '../../services/omdbService';
import "./NewItemView.css"
import { Redirect } from 'react-router-dom';
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
        let embedLink = link.replace("watch?v=","embed/");
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
                <form id="form" className="col-6 offset-1" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Название фильма</label>
                        <input type="text" className="form-control" id="name" placeholder="Тихое место" onChange={this.handleNameChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="trailer">Трейлер</label>
                        <input type="text" className="form-control" id="trailer"
                            placeholder="https://www.youtube.com/embed/J-G1rs7N-XE" onChange={this.handleTrailerChange} />
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="search" onChange={this.handleSearchChange} />
                        <label className="form-check-label" htmlFor="search">
                            Заполнить вручную
                        </label>
                    </div>
                    <div id="manualSearch">
                        <div className="form-group">
                            <label htmlFor="genre">Жанр</label>
                            <select className="form-control" id="genre" onChange={this.handleGenreChange}>
                                <option>Ужасы</option>
                                <option>Комедия</option>
                                <option>Триллер</option>
                                <option>Боевик</option>
                                <option>Фэнтези</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="type">Категория</label>
                            <select className="form-control" id="type" onChange={this.handleTypeChange}>
                                <option>Movie</option>
                                <option>Series</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="poster">Постер</label>
                            <input type="text" className="form-control" id="poster"
                                placeholder="https://st.kp.yandex.net/images/film_iphone/iphone360_1044906.jpg" onChange={this.handlePosterChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="plot" >Описание</label>
                            <textarea className="form-control" id="plot" rows="4" onChange={this.handlePlotChange}></textarea>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <div className="col-4">
                    <img className="col-10" id="posterImg" src="https://st.kp.yandex.net/images/film_iphone/iphone360_1044906.jpg" alt="Постер" />
                </div>
            </div>
        )
    }

}

export default NewItemView;