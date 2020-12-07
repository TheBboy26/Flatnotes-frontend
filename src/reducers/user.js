
const users = (state = null, action) =>{
    switch (action.type){
        case "GOOD_LOGIN":
            return action.user
        case 'GOOD_REGISTER':
            return action.user
        case 'LOGOUT':
            return null

            default:
                return state
    }
}

export default users