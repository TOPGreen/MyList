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
                trailer: "https://www.youtube.com/watch?v=boBAotgcQ88",
                genre: "drama",
            },
            {
                id: "2",
                name: "film2",
                description: "description of this film",
                trailer: "",
                genre: "comedy",
            },
            {
                id: "3",
                name: "film3",
                description: "description of this film",
                trailer: "",
                genre: "fantasy",
            },
        ],
        series: [
            {
                id: "1",
                name: "series1",
                description: "description of this series",
                trailer: "",
                genre: "detective",
            },
            {
                id: "2",
                name: "series1",
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
            <div className="row">
                <div id="listView" className="col-3">
                    {this.state.topic}
                    <div className="list-group">
                        {this.state.items.map((item) => <ListItem item={item} key={item.id} />)}
                    </div>
                </div >
                {/* <div id="videoPlayer" className="col-6">
                    <iframe title="video" id="video" type="text/html" width="640" height="360"
                        src="https://www.youtube.com/watch?v=boBAotgcQ88/"
                        frameborder="0" />
                </div> */}
            </div>

        )
    }

}

export default ListView;