import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import './MenuNavUser.css';

class MenuNavUser extends Component {
    constructor(props){
        super(props);
        this.state  = {
            email: 'Log-In'
        };
    };

    // elon.rocket@gmail.com
    componentDidMount() {

        const token = localStorage.usertoken;

        if(token) {

            const decoded = jwt_decode(token);
            console.log(decoded);

            this.setState({
                email: decoded.email
            });

        } else {

            this.setState({
                email: 'Log-In'
            });

        }
        
    };

    render() {
        return (
            <li className="modal__item">
                <div className="modal__item--container">
                    <a href="" className="modal__link" onClick={(event) => { event.preventDefault() }}>
                        <span>{this.state.email}</span>
                    </a>
                    <img src={this.props.userImageSmall} alt="person" className="img--fluid img--small img--account-small"/>
                </div>
            </li>
        );
    }
}

export default MenuNavUser;
