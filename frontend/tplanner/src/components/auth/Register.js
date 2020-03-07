import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import "./Register.css"

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.registerUser(newUser, this.props.history);
    }

    render() {
        const {errors} = this.state;
        const buttonStyle = {
            textAlign: 'center',
        };

        return (
            <div className="register">
                <div className="form">
                    <h1 className="registerheader">Travel Planner Sign Up</h1>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div style={{width : "540px", margin : "auto"}}>
                        <TextFieldGroup
                            placeholder="Your Email"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            error={errors.email}
                        />


                        <TextFieldGroup
                            placeholder="Create Password"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            error={errors.password}
                        />
                        </div>
                        <div className={"name_container"}>
                            <TextFieldGroup
                                placeholder="First Name"
                                name="firstname"
                                type="string"
                                onChange={this.onChange}
                            />
                            <TextFieldGroup
                                placeholder="Last Name"
                                name="lastname"
                                type="string"
                                onChange={this.onChange}
                            />
                        </div>
                        <div className={"temp"}>
                        <button className={"submit_button"}>Sign Up with Travel Planner</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {registerUser})(withRouter(Register));
