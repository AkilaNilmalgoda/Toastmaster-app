import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../images/mainlogo.png"

export default class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="row pt-3 ">
                    <div className="col-4 text-center"><img className="logo" src={Logo} alt="" /></div>
                    <div className=" col-8 pt-3"><h1>Toastmasters Table Topics</h1></div>
                </div>
                
            </div>
        )
    }
}
