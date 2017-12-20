import React, {Component} from 'react';
import './App.css';
import {fetchTasks} from "./FetchTasks.js";
import Task from './Task'


class App extends Component {

    constructor() {
        super();
        this.state = {tasks: []};
    }


    componentDidMount() {
        fetchTasks()
            .then(tasks => this.setState({tasks}))
    }

    render() {
        return (
            <div className="App">
                <div>
                    <h2>Was ist zu tun?</h2>
                </div>
                <div>
                    <Task/>
                </div>
                <ul>
                    {this.state.tasks.map(function(task){
                         return <li key={task.id}><Task title={task.titel} description={task.beschreibung}/></li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default App;
