const notes =(state = [], action) => {
    switch(action.type){
        case 'USER_NOTES':
            return action.userNotes
        case 'CREATE_NOTE':
            return state.concat(action.note)
        case "EDIT_NOTE":
            return state.filter(note => note.id !== action.note.id).concat(action.note)
        case 'DELETE_NOTE':
            return  state.filter(note => note.id !== action.noteID)

            default: 
            return state
        }
    }

export default notes