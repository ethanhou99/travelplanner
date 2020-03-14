import React, {Component} from 'react';
import Popup from "reactjs-popup";
import Avatar from '@material-ui/core/Avatar';
import {deepOrange, deepPurple} from '@material-ui/core/colors';
import {makeStyles} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import "./User.css";


export default class User extends Component {

    constructor(props) {
        super(props);

        this.avaterOnClickHandler = this.avaterOnClickHandler.bind(this);
        this.state = {
            showPopup: false,
        };
    }

    avaterOnClickHandler(e) {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    const
    popStyle = {
        width: "200px",
        marginTop : "10px",
        height : "200px",
        marginLeft : "20px",
        backgroundColor : "white",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    };

    render() {
        return (
            <div style = {{width: "100%", position: "relative", zIndex : 1}}>
                <Avatar style={{
                    color: "white",
                    backgroundColor: deepOrange[500], marginTop: "10px", marginLeft: "10px"
                }} onClick={this.avaterOnClickHandler}>N</Avatar>
                {this.state.showPopup ?
                    <div style={this.popStyle}>
                        <Avatar style={{
                            color: "white",
                            backgroundColor: deepOrange[500], marginLeft: "auto", marginRight: "auto",
                        }} onClick={this.avaterOnClickHandler}>N</Avatar>
                        <div>
                        <Link to = "wait for state">Creat new plan<br/></Link>
                        <Link to = '/dashborad2'>Mange saved planes</Link>
                        </div>
                        <Link to = '/home'>sign out<br/></Link>
                    </div>
                    : null
                }
            </div>
        )
    }
}