const initialState = {
    loggedIn:false,
    user: {}
};

const userReducer = (state = initialState, action) => {
let {type, payload} = action;
    switch(type){
        case 'SET_USER':
            return {
                loggedIn:true,
                user: { ...payload}
            }
        case 'LOG_OUT':
            // 
            return {
                loggedIn: false,
                user: {}
            }
        default: return state
    }
}

export default userReducer;