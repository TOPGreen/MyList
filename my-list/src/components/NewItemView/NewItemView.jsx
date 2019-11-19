import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { addItem } from "../../services/itemsService"
import { getFilm } from '../../services/omdbService';
import "./style.css"
import { Redirect } from 'react-router-dom';
class NewItemView extends React.Component {

    state = {
        name: '',
        trailer: '',
        genre: 'Ужасы',
        description: '',
        poster: ''
    }
    topic = 'films';

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTrailerChange = this.handleTrailerChange.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handlePosterChange = this.handlePosterChange.bind(this);
        this.handleTopicChange = this.handleTopicChange.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSubmit(event) {
        addItem(this.topic, this.state)
            .then(res => {
                console.log("good");
                return (<Redirect to="/films" />)
            })
            .catch(rej => {
                console.log("bad")
            });

    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
        getFilm(event.target.value)
            .then(res => {
                console.log(res);
                let info = res.data
                if (info.Response != "False") {
                    document.querySelector("#posterImg").src = info.Poster;
                    this.setState({ name: info.Title, genre: info.Genre, poster: info.Poster });
                }
            })
            .catch();
    }
    handleTrailerChange(event) { this.setState({ trailer: event.target.value }) }
    handleGenreChange(event) { this.setState({ genre: event.target.value }) }
    handleDescriptionChange(event) { this.setState({ description: event.target.value }) }
    handlePosterChange(event) {
        this.setState({ poster: event.target.value });
        document.querySelector("#posterImg").src = this.state.poster;
    }
    handleTopicChange(event) { event.target.value == "Фильм" ? this.topic = "films" : this.topic = "series"; }
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
                <form id="form" className="col-7" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Название фильма</label>
                        <input type="text" className="form-control" id="name" placeholder="Тихое место" onChange={this.handleNameChange} />
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
                            <label htmlFor="topic">Категория</label>
                            <select className="form-control" id="topic" onChange={this.handleTopicChange}>
                                <option>Фильм</option>
                                <option>Сериал</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="poster">Постер</label>
                            <input type="text" className="form-control" id="poster"
                                placeholder="https://st.kp.yandex.net/images/film_iphone/iphone360_1044906.jpg" onChange={this.handlePosterChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="trailer">Трейлер</label>
                        <input type="text" className="form-control" id="trailer"
                            placeholder="https://www.youtube.com/embed/J-G1rs7N-XE" onChange={this.handleTrailerChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description" >Описание</label>
                        <textarea className="form-control" id="description" rows="4" onChange={this.handleDescriptionChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <div className="col-4">
                    <img className="col-8" id="posterImg" src="https://st.kp.yandex.net/images/film_iphone/iphone360_1044906.jpg" alt="Постер" />
                </div>
            </div>
        )
    }

}

export default NewItemView;