import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Component.css'

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

export default Login;