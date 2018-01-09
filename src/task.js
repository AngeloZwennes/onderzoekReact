import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Button from "react-bootstrap/es/Button";
import Modal from "react-bootstrap/es/Modal";


class Task extends React.Component {
    value;
    constructor(){
        super();
        this.state = {
            tasks : [],
            value: ''
        }
        this.getAllTask();
        this.handleChange = this.handleChange.bind(this)
    }

    deleteRow(id, e) {
        fetch('https://stefanbode.nl/api/task/delete.php?task_id=' + id)
            .then(results => {
                this.getAllTask();
            })
    }

    getAllTask(){
        fetch('https://stefanbode.nl/api/task/read.php')
            .then(results => {
                return results.json();
            }).then(data => {
                if(data.records) {
                    let tasks = data.records.map((task) => {
                        return (
                            <ul key={task.task_id} className="list-group">
                                <li className="list-group-item clearfix">{task.task}
                                    <span className="pull-right button-group">
                                        <button type="button" className="btn btn-danger"
                                                onClick={(e) => this.deleteRow(task.task_id, e)}><i className="fa fa-times" aria-hidden="true"></i></button>
                                    </span>
                                </li>
                            </ul>
                        )
                    });
                    this.setState({tasks: tasks});
                } else {
                    this.setState({tasks: "No task found"});
                }

        })
    }

    saveTask(event) {
        event.preventDefault();
        this.setState({show: false});

        fetch('https://stefanbode.nl/api/task/create.php?task=' + this.state.value)
            .then(results => {
                this.getAllTask();
            })
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        let close = () => this.setState({ show: false });

        return (
            <div>
                <h3>Task</h3>
                <div>{this.state.tasks}</div>

                <Button onClick={() => this.setState({ show: true })}>
                    Add item
                </Button>

                <div className="static-modal">
                    <Modal show={this.state.show} onHide={close} container={this} aria-labelledby="contained-modal-title">
                        <form onSubmit={this.saveTask}>
                            <Modal.Header>
                                <Modal.Title>Add task</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>

                                    <div className="modal-body">
                                        <input type="text" value={this.value} onChange={this.handleChange} className="form-control" />
                                    </div>

                            </Modal.Body>

                            <Modal.Footer>
                                <Button onClick={close}>Close</Button>
                                <Button type="submit" bsStyle="primary" onClick={(e) => this.saveTask(e)}>Save Task</Button>
                            </Modal.Footer>
                        </form>
                    </Modal>
                </div>
            </div>
        );
    }
}
export default Task;