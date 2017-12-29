import React, {Component} from 'react';
import './App.css';
import {getAllTasks} from "./FetchTasks.js";
import Task from './Task'


class App extends Component {

    constructor() {
        super();
        this.state = {tasks: []};
        this.handleTaskCreated = this.handleTaskCreated.bind(this);
    }

    componentDidMount() {
        getAllTasks()
            .then(tasks => this.setState({tasks}))
    }

    handleTaskCreated(task) {
        this.state.tasks.push(task);
        this.setState({tasks: this.state.tasks});
    }

    render() {
        return (
            <div className="App">
                <div>
                    <h2>Was ist zu tun?</h2>
                </div>
                <div>
                    <Task handleTaskCreated={this.handleTaskCreated}/>
                </div>
                <ul className="Tasklist">
                    {this.state.tasks.map(function(task){
                         return <li key={task.id}>
                             <Task id={task.id}
                                   title={task.titel}
                                   description={task.beschreibung}
                                   status={task.status}
                             />
                         </li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default App;
