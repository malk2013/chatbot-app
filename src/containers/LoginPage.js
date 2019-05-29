import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        // reset login status
      // this.props.dispatch(userActions.logout());
        this.state = {
            email: "",
            password: ""
        };
    }
    componentDidMount() {
        this.props.dispatch(userActions.logout());
      }
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }
    handleChange = event => {        
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }
    render() {
        return (
 <div className="login-form"> 
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Register</div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group"    >
                                        <div className="control-label">Email</div>
                                        <input className="form-control"

                                            type="email"

                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group"  >
                                        <div className="control-label">Password</div>
                                        <div className="form-control"
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                            type="password"
                                        />
                                    </div>
                                    <div className="btn btn-primary"


                                        disabled={!this.validateForm()}
                                        type="submit"
                                    >
                                        Login
          </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            </div>
        );
    }
}
function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 