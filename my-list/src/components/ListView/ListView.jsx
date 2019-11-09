import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import ListItem from "../ListItem"
import './ListView.css';

class ListView extends React.Component {

    state = {
        items: [],
        films: [
            {
                id: "1",
                name: "Бремя",
                description: "description of this film",
                trailer: "https://www.youtube.com/embed/boBAotgcQ88",
                genre: "drama",
            },
            {
                id: "2",
                name: "Тебя здесь никогда не было",
                description: "description of this film",
                trailer: "https://www.youtube.com/embed/cZP0kY-ksfQ",
                genre: "comedy",
            },
            {
                id: "3",
                name: "Свет моей жизни",
                description: "description of this film",
                trailer: "https://www.youtube.com/embed/zU2d6pLLtZc",
                genre: "fantasy",
            },
        ],
        series: [
            {
                id: "1",
                name: "Ведьмак",
                description: "description of this series",
                trailer: "https://www.youtube.com/embed/EUizTA1nrfA",
                genre: "detective",
            },
            {
                id: "2",
                name: "series2",
                description: "description of this series",
                trailer: "",
                genre: "fantasy",
            },
            {
                id: "3",
                name: "series3",
                description: "description of this series",
                trailer: "",
                genre: "thriller",
            },
        ]
    };

    constructor(props) {
        super(props);
        this.state.topic = props.topic;
        if (this.state.topic === "films") {
            this.state.items = this.state.films;
        } else {
            this.state.items = this.state.series;
        }

    }



    render() {
        return (
          
            <div>
                <h2>{this.state.topic}</h2>
                <div className="row">
                <div id="listView" className="col-4">
                    <div className="list-group">
                        {this.state.items.map((item) => <ListItem item={item} key={item.id} />)}
                    </div>
                </div >
                <div id="videoPlayer" className="col-6">
                    <iframe id="video" width="560" height="315" src=""
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
                        picture-in-picture" allowfullscreen></iframe>
                </div>
                </div>
            </div>

        )
    }

}

export default ListView;