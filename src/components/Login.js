import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Component.css'
import { loginSuccess } from '../actions/userAction'
import { getUserNotes } from '../actions/noteActions'
import { connect } from 'react-redux'

export class Login extends Component {

    constructor() {
        super()

        this.state = {
            username: '',
        }
    }
 
    handleLoginChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleLoginSubmit = (event) => {
        event.preventDefault()
        
        const loginData = {
            username: this.state.username
        }

        this.setState({
            username: ''
        })
    }

    render() {
        return (
            
                        <div className='login-card' id='loginCard'>
                            <h2>Flatnotes</h2>
                            <p className='subtitle'>note taking app </p>
                                { this.state.showAlert ? <div className="alert" role="alert" id='loginAlert'>Username not found</div> : null }
                            <form onSubmit={this.handleLoginSubmit}>
                                <label className='input-label'>Username:</label>
                                <br />
                                <input className='input-textbox' type='text' placeholder='Username' value={this.state.username} onChange={this.handleLoginChange}  />
                                <br />
                                <input className='input-btn' type='submit' value='Login' />
                            </form>
                            <Link  to="/register">Register</Link>
                        </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginSuccess: (user) => dispatch(loginSuccess(user)),
        getUserNotes: (userNotes) => dispatch(getUserNotes(userNotes))
    }
}

export default connect(null, mapDispatchToProps)(Login)