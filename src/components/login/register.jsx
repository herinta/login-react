import React from "react";
import loginImg from "./login.svg";

export class Register extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="base-container">
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} alt=""/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="Email" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Password</label>
                        <input type="passsword" name="password" placeholder="Password"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">Register</button>
            </div>
        </div>
    }
}