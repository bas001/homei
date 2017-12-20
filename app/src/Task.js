import React, {Component} from 'react';
import './Task.css';


class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {title: props.title, description: props.description, creationDate: new Date()};
    }


    componentDidMount() {
    }

    render() {
        return (
            <div className="Task">
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                    />
                    <label>
                        {this.state.title}
                    </label>
                </div>
                <label>
                    {this.state.description}
                </label>

                <input
                    ref="editField"
                    className="edit"

            />
            </div>
        );
    }
}

export default Task