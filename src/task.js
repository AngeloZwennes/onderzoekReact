import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';



class Task extends React.Component {
    constructor(){
        super();
        this.state = {
            tasks : [],
        }
        this.getAllTask();
    }

    deleteRow(id, e) {
        console.log('Hii'+ id);
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

    render() {
        return (
            <div>
                <h3>Task</h3>
                <div>{this.state.tasks}</div>

                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#addTask">
                    Add item
                </button>

                <div className="modal fade" id="addTask" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title" id="myModalLabel">Add task</h4>
                            </div>
                            <form>
                            <div className="modal-body">
                                <input placeholder="add" name="New task name" className="form-control" />
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">save Task</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Task;