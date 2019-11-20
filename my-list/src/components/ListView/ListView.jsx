import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import ListItem from "../ListItem"
import './ListView.css';

import {getItems} from '../../services/itemsService'
    


class ListView extends React.Component {

    state = {
        items: [],
    };

    constructor(props) {
        super(props);
        this.state.type = props.type;
    }
    componentDidMount(){  
        if(this.state.type){
            getItems(this.state.type)
            .then(res =>{
                this.setState({items:res.data})
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
        if(this.state.items.length!=0){
        return (
            <div>
                <div className="row">
                    <div id="listView" className="col-3">
                        <div className="list-group">
                            {this.state.items.map((item) => <ListItem item={item} key={item.id} />)}
                        </div>
                    </div >
                    <div id="infoView" className="col-9 offset-3">
                        <h3>Trailer</h3>
                        <iframe id="video" width="700" height="400" src=""
                            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
                            picture-in-picture" allowFullScreen></iframe>
                        <h3>Plot</h3>
                        <p id="plot"></p>
                    </div>
                </div>
            </div>

        )
        } else{
        return( <h2>{this.state.type.toUpperCase()} list is empty</h2>);
        }
    }

}

export default ListView;