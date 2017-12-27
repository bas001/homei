import React, {Component} from 'react';
import './Task.css';
import {postTask} from "./FetchTasks.js";


let inputTimeout = null;

class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {id: props.id};
        this.handleChange = this.handleChange.bind(this);
        this.handlePost = this.handlePost.bind(this);
    }

    handleChange() {
        // Clear the timeout if it has already been set.
        // This will prevent the previous task from executing
        // if it has been less than <MILLISECONDS>
        clearTimeout(inputTimeout);

        let description = this.refs.description;
        let title = this.refs.title;

        let it = this;
        inputTimeout = setTimeout(function () {
            if (it.state.id) {
                //patchTask()
            } else {
                postTask({title: title.value, description: description.value})
                    .then(function (taskDto) {
                            it.handlePost(taskDto)
                        }
                    );
            }
        }, 3000);
    }

    handlePost(taskDto) {
        // take values from backend (maybe all?)
        this.setState({id: taskDto.id});

        this.props.handleTaskCreated(taskDto);

        // clear input fields
        this.refs.description.value = "";
        this.refs.title.value = "";

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
                               onChange={this.handleChange}
                               defaultValue={this.props.title}/></td>
                </tr>
                <tr>
                    <td><input className="edit"
                               ref="description"
                               data-attribute="description"
                               onChange={this.handleChange}
                               defaultValue={this.props.description}/></td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default Task