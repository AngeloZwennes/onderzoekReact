import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './dashboard.js';
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

ReactDOM.render(
    <Dashboard />,
    document.getElementById('root')
);
