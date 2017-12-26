import React, {Component} from 'react';
import './Task.css';
import {postTask} from "./FetchTasks.js";


let inputTimeout = null;

class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {id: props.id, title: props.title, description: props.description, creationDate: new Date()};
        this.handleChange = this.handleChange.bind(this);
        this.handlePost = this.handlePost.bind(this);

    }

    handleChange(event) {
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
                postTask({title: title.value, description: description.value}, it.handlePost);
            }
        }, 2000);
    }

    handlePost(taskDto) {
        this.setState({id: taskDto.id});
        this.props.handleTaskCreated(taskDto)
        // clear input fields
    }

    componentDidMount() {
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
                               ref = "title"
                               data-attribute="title"
                               onChange={this.handleChange}
                               defaultValue={this.state.title}/></td>
                </tr>
                <tr>
                    <td><input className="edit"
                               ref = "description"
                               data-attribute="description"
                               onChange={this.handleChange}
                               defaultValue={this.state.description}/></td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default Task