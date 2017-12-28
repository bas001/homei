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

            if (this.state.id) {
                patchTask({id: this.state.id, title: title.value, description: description.value})
            } else {
                let it = this;
                postTask({title: title.value, description: description.value})
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

    render() {
        return (
            <table className="Task">
                <tbody>
                <tr>
                    <td><input className="toggle"
                               type="checkbox"/></td>
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