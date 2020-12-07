import React, {Component, Fragment} from 'react'
import './Component.css'

export class NoteForm extends Component {
    constructor(){
        super()
        this.state ={
            title: '',
            content:''
        }
    }
    
    handleGoBackClick = () => {
        this.props.history.goBack()
    }

    handleNewNoteChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <Fragment>
            <button onClick={this.handleGoBackClick}>Go Back</button>
                      
             <h2>New Note </h2>
           <p >Post your new note</p>
              <form onSubmit={this.handleNewNoteSubmit}>
                    <label >Title:</label>
                        <br />
                    <input type='text' name='title' placeholder='Note Title' value={this.state.title} onChange={this.handleNewNoteChange} required />
                        <br />
                    <label >Note:</label>
                        <br />
                    <textarea   type='text' name='content' placeholder='Note Content' value={this.state.content} onChange={this.handleNewNoteChange} required />
                        <br />
                    <input type='submit' value='Post' />
                           </form>
                        
                       </Fragment>  
         )
    }
}

export default NoteForm;