import React, {Component, Fragment} from 'react'
import './Component.css'

export class Register extends Component {
    constructor(){
        super()
        this.state ={
            first_name: '',
            last_name:'',
            username:''
        }
    }

        handleRegistrySubmit = (event) =>{
            event.PreventDefault()

            const registryData ={
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                username: this.state.username
            } 
        }

        handleRegisterChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

    render(){
        return(
            <Fragment>
            <h2>new registry</h2>
            <div>
                <form submit={this.handleRegistrySubmit}>
                    <label> First name: </label>
                    <input type='text' name='first_name' placeholder='First Name' value={this.state.first_name} onChange={this.handleRegisterChange} />
                    <br />
                    <label> Last name: </label>
                    <input type='text' name='last_name' placeholder='Last Name' value={this.state.last_name} onChange={this.handleRegisterChange}/>
                    <br />
                    <label> Username: </label>
                    <input type='text' name='username' placeholder='username' value={this.state.username} onChange={this.handleRegisterChange}/>
                    <br />
                    <input className='input-btn' type='submit' value='Register' />

                </form>
            </div>
           </Fragment> 
        )
    }
}

export default Register;