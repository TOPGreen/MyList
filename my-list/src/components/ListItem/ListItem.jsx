import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

class ListItem extends React.Component {

    state = {};

    constructor(props) {
        super(props);
        this.state.item = props.item;
        console.log(props)
    }

    render() {
        return (
            // <div className="" onClick={this.showInfo}>
            //     <a href="#" className="list-group-item list-group-item-action">
            //         <div className="d-flex w-100 justify-content-between">
            //             <h5 className="mb-1">{this.state.item.name}</h5>
            //             <small>3 days ago</small>
            //         </div>
            //         <p className="mb-1">{this.state.item.description}</p>
            //         <small>{this.state.item.genre}</small>
            //     </a>
            // </div>
            <div className="card" onClick={this.showInfo}>
                <img src={this.state.item.poster} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">{this.state.item.name}</p>
                </div>
            </div>
        )
    }

    showInfo = () => {
        document.querySelector("#video").src = this.state.item.trailer;
        document.querySelector("#plot").innerText = this.state.item.plot;
        document.querySelector("#infoView").style.display = "block";
    }

}

export default ListItem;