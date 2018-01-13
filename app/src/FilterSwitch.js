import React, {Component} from 'react';

class FilterSwitch extends Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);

    }

    handleOnClick(event) {
        this.props.switchHandler(event.target.id)
    }

    render() {
        return (
            <div>
                <button id="all" onClick={this.handleOnClick}>Alle</button>
                <button id="open" onClick={this.handleOnClick}>Offen</button>
                <button id="done" onClick={this.handleOnClick}>Erledigt</button>
            </div>
        );
    }
}

let FilterStatus = {
    All : "all",
    Open : "open",
    Done : "done"
};

export {FilterSwitch, FilterStatus}