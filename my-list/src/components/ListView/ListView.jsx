import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import ListItem from "../ListItem"
import './ListView.css';

import {getItems} from '../../services/itemsService'
    


class ListView extends React.Component {

    state = {
        items: [],
        isEmpty:true
    };

    constructor(props) {
        super(props);
        this.state.topic = props.topic;
    }
    componentDidMount(){  
        if(this.state.topic){
            getItems(this.state.topic)
            .then(res =>{
                this.setState({items:res.data, isEmpty:false})
                console.log(this.state.items)
            })
            .catch(rej =>{
                console.log(rej)
            });
        } else {
            this.state.items = this.state.series;
        }
    }

   
    render() {
        if(!this.state.isEmpty){
        return (
            <div>
                <div className="row">
                    <div id="listView" className="col-3">
                        <div className="list-group">
                            {this.state.items.map((item) => <ListItem item={item} key={item.id} />)}
                        </div>
                    </div >
                    <div id="infoView" className="col-9 offset-3">
                        <h3>Трейлер</h3>
                        <iframe id="video" width="560" height="315" src=""
                            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
                            picture-in-picture" allowFullScreen></iframe>
                        <h3>Описание</h3>
                        <p id="description"></p>
                    </div>
                </div>
            </div>

        )
        } else{
            return( <h2></h2>);
        }
    }

}

export default ListView;