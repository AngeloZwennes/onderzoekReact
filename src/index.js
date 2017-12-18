import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class Login extends React.Component {
    render() {
        return (
            <div id="logincontainer">
                <form name='form-login'>
                    <span class="fontawesome-user"></span>
                    <input type="text" name="nameField" placeholder="Name" />
                    <span class="fa fa-envelope"></span>
                    <input type="email" email name="emailField" id="user" laceholder="Email" />
                    <div>
                        <span class="emailError">Email is invalid</span>
                    </div>
                    <button class="BtnSubmit">Log in</button>
                 </form>
            </div>
        );
    }
}

class Dashboard extends React.Component {
    render() {
        return (
        <div class="dashboard">
            <div class="navbar">
                <h2 id="logo">FamilyCollab</h2>
                <div class="icons">
                    <a class="fa fa-cog" id="settings"></a>
                    <a class="fa fa-user" id="user"></a>
                </div>
            </div>
            <div class="container modulesspace">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="row">
                            <div class="col-sm-6 ">
                                <div class="box1 toprow">
                                    <app-photo></app-photo>
                                </div>
                            </div>
                            <div class="col-sm-6" >
                                <div class="box2 toprow">
                                    <app-family></app-family>
                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 ">
                                <div class="whitebox bottomrow">
                                </div>
                            </div>
                            <div class="col-sm-6" >
                                <div class="whitebox bottomrow"><app-task></app-task></div>
                            </div>
                        </div>
                    </div>


                    <div class="col-sm-6 ">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="whitebox largebox">
                                    <app-calendar></app-calendar>
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


ReactDOM.render(
    <Dashboard />,
    document.getElementById('root')
);
