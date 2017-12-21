import React from 'react';
import './dashboard.css';
import Task from './task.js';
import Photo from './photo.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <div className="navbar">
                    <h2 id="logo">FamilyCollab</h2>
                    <div className="icons">
                        <a className="fa fa-cog" id="settings"></a>
                        <a className="fa fa-user" id="user"></a>
                    </div>
                </div>
                <div className="container modulesspace">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-6 ">
                                    <div className="box1 toprow">
                                        <Photo />
                                    </div>
                                </div>
                                <div className="col-sm-6" >
                                    <div className="box2 toprow">

                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 ">
                                    <div className="whitebox bottomrow">
                                    </div>
                                </div>
                                <div className="col-sm-6 whitebox bottomrow" >
                                    <Task />
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-6 ">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="whitebox largebox">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Dashboard;