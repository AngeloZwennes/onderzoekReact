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
                            <ul class="list-group">
                                <li class="list-group-item clearfix">{task.task}
                                    <span class="pull-right button-group">
                                        <button type="button" class="btn btn-danger"
                                                onClick={(e) => this.deleteRow(task.task_id, e)}><i class="fa fa-times"
                                                                                                    aria-hidden="true"></i></button>
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
                <h2>Task</h2>
                <div>{this.state.tasks}</div>
            </div>
        );
    }
}
export default Task;