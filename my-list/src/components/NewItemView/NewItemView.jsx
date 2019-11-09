import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { addItem } from "../../services/itemsService"

class NewItemView extends React.Component {

    state = {}

    constructor(props) {
        super(props)
        console.log('------------------------------')
    }

    render() {
        return (
            <h2>New Item</h2>
        )
    }

}

export default NewItemView;