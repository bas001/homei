import React, {Component} from 'react';
import './FilterSwitch.css'

class FilterSwitch extends Component {

    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.state = ({init: true});
    }


    componentDidMount() {
        document.getElementById(this.props.filter).setAttribute("class", "clickedButton")
    }


    handleOnClick(event) {
        this.props.switchHandler(event.target.id)
        let buttons = document.getElementsByTagName("button");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute("class", "button")
        }
        document.getElementById(event.target.id).setAttribute("class", "clickedButton");
    }

    render() {
        return (
            <div>
                <button id="open" className={this.state.init} onClick={this.handleOnClick}>Offen</button>
                <button id="all" className={this.state.init} onClick={this.handleOnClick}>Alle</button>
                <button id="done" className={this.state.init} onClick={this.handleOnClick}>Erledigt</button>
            </div>
        );
    }
}

let FilterStatus = {
    All: "all",
    Open: "open",
    Done: "done"
};

export {FilterSwitch, FilterStatus}