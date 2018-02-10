import React, {Component} from 'react';
import './App.css';
import {getAllTasks, getAllTasksByStatus} from "./FetchTasks.js";
import Task from './Task'
import TaskTemplate from './TaskTemplate'
import {FilterSwitch, FilterStatus} from "./FilterSwitch";


class App extends Component {

    constructor() {
        super();
        this.state = {tasks: [], filterStatus : FilterStatus.Open, failedToLoadTasks: false};
        this.handleTaskCreated = this.handleTaskCreated.bind(this);
        this.handleFilterStatusChanged = this.handleFilterStatusChanged.bind(this);
    }

    componentDidMount() {
        getAllTasks()
            .then(tasks => this.setState({tasks}))
            .catch(() => {
                this.setState({failedToLoadTasks: true})
            })
    }

    handleTaskCreated(task) {
        this.state.tasks.unshift(task);
        this.setState({tasks: this.state.tasks});
    }

    handleFilterStatusChanged(status) {
        if (status === FilterStatus.All) {
            this.componentDidMount()
        } else {
            getAllTasksByStatus(status)
                .then(tasks => this.setState({tasks}))
        }
    }

    render() {
        if (this.state.failedToLoadTasks === true) {
            return(<div>Fehler beim Laden der Aufgaben</div>)
        }
        return (
            <div className="App">
                <div>
                    <h2>Was ist zu tun?</h2>
                </div>
                <div>
                    <TaskTemplate handleTaskCreated={this.handleTaskCreated}/>
                </div>
                <div>
                    <FilterSwitch filter={this.state.filterStatus} switchHandler={this.handleFilterStatusChanged}/>
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
