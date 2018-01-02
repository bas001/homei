import React, {Component} from 'react';
import './Task.css';
import {patchTask} from "./FetchTasks.js";

let inputTimeout = null;

class Task extends Component {

    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    static mapFromStatus(status) {
        return status === 'ERLEDIGT'
    }

    static mapToStatus(checkbox) {
        return checkbox ? 'ERLEDIGT' : 'OFFEN'
    }

    handleKeyPress() {
        // Clear the timeout if it has already been set.
        // This will prevent the previous task from executing
        // if it has been less than <MILLISECONDS>
        clearTimeout(inputTimeout);

        let it = this;
        inputTimeout = setTimeout(function () {
            patchTask(JSON.stringify({
                id: it.props.id,
                titel: it.refs.title.value,
                beschreibung: it.refs.description.value,
                status: Task.mapToStatus(it.refs.checkbox.checked)
            }));
        }, 1000);

    }

    render() {
        return (
            <table className="Task">
                <tbody>
                <tr>
                    <td><input className="toggle"
                               ref="checkbox"
                               type="checkbox"
                               onClick={this.handleKeyPress}
                               defaultChecked={Task.mapFromStatus(this.props.status)}/></td>
                </tr>
                <tr>
                    <td><input className="edit"
                               ref="title"
                               data-attribute="title"
                               onKeyPress={this.handleKeyPress}
                               defaultValue={this.props.title}/></td>
                </tr>
                <tr>
                    <td><input className="edit"
                               ref="description"
                               data-attribute="description"
                               onKeyPress={this.handleKeyPress}
                               defaultValue={this.props.description}/></td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default Task