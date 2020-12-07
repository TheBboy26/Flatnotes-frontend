export const goodLogin = (user) =>{
    return{
        type: 'GOOD_LOGIN', user
    }
}
export const goodRegister = (user) =>{
    return{
        type: 'GOOD_REGISTER', user
    }
}
export const goodLogout = () =>{
    return{
        type: 'LOGOUT'
    }
}