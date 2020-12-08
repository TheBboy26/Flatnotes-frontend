import React, { Component } from 'react'
import { connect } from 'react-redux'
import Note from '../components/Note'
import './Container.css'
import { logoutSuccess } from '../actions/userAction'
 
export class NotesContainer extends Component {

    componentDidMount() {
        if (!this.props.user) {
            this.props.history.push('/login')
        }
    }

    // renderNotes = () => {
    //     return this.props.notes.map(note => <Note note={note} key={note.id} />)
    // }

    handleCreateNoteClick = () => {
        this.props.history.push('/notes/new')
    }

    handleLogOutClick = () => {
        this.props.logoutSuccess()
        this.props.history.push('/login')
    }

    render() {
        
        return (
            <div className='container h-100'>
                <div className='row align-items-center h-100'>
                    <div className='mx-auto'>
                        <div className='btn-container'>
                            <div className="note-container-dropdown dropdown">
                            </div>
                            <button className='new-note-btn' id='createNoteBtn' onClick={this.handleCreateNoteClick}>Create Note</button>
                            <button className='new-note-btn' id='logOutBtn' onClick={this.handleLogOutClick}>Logout</button>
                        </div>
                        {/* {this.renderNotes()} */}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        notes: state.notes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutSuccess: () => dispatch(logoutSuccess())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer)