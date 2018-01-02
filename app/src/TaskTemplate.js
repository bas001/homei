import React, {Component} from 'react';
import './Task.css';
import {postTask} from "./FetchTasks.js";

const ENTER = 'Enter';

class TaskTemplate extends Component {

    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handlePost = this.handlePost.bind(this);
    }

    handleKeyPress(event) {
        if (event.key === ENTER) {
            let title = this.refs.title;
            let description = this.refs.description;

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

    handlePost(taskDto) {
        this.props.handleTaskCreated(taskDto);

        // clear input fields
        this.refs.title.focus();
        this.refs.title.value = "";
        this.refs.description.value = "";

        // reset state
        this.setState({id: null})
    }

    render() {
        return (
            <table className="Task">
                <tbody>
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

export default TaskTemplate