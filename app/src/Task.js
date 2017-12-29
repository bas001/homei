import React, {Component} from 'react';
import './Task.css';
import {patchTask, postTask} from "./FetchTasks.js";

const ENTER = 'Enter';

class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {id: props.id};
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handlePost = this.handlePost.bind(this);
    }

    handleKeyPress(event) {
        if (event.key === ENTER) {
            let title = this.refs.title;
            let description = this.refs.description;
            let checkbox = this.refs.checkbox;

            if (this.state.id) {
                patchTask(JSON.stringify({
                    id: this.state.id,
                    titel: title.value,
                    beschreibung: description.value,
                    status: Task.mapToStatus(checkbox.checked)
                }))
            } else {
                let it = this;
                postTask(JSON.stringify({
                    titel: title.value,
                    beschreibung: description.value
                }))
                    .then(function (taskDto) {
                            it.handlePost(taskDto)
                        }
                    );
            }
        }
    }

    handlePost(taskDto) {
        // take values from backend (maybe all?)
        this.setState({id: taskDto.id});

        this.props.handleTaskCreated(taskDto);

        // clear input fields
        this.refs.title.focus();
        this.refs.title.value = "";
        this.refs.description.value = "";

        // reset state
        this.setState({id: null})
    }

    static mapFromStatus(status) {
        return status === 'ERLEDIGT'
    }

    static mapToStatus(checkbox) {
        return checkbox ? 'ERLEDIGT' : 'OFFEN'
    }

    render() {
        return (
            <table className="Task">
                <tbody>
                <tr>
                    <td><input className="toggle"
                               ref="checkbox"
                               type="checkbox"
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