const setUser = payload => ({ type: "SET_USER", payload})

export const logUserOut = () => ({ type: "LOG_OUT", payload})



export const fetchUser = (userInfo) => dispatch => {
    fetch('http://localhost:3009/api/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
        /*data format will be:
        {
            user: {},
            token: "lasd;l.lksdlfk.lksdlj"
        }
        */

       // save token to cookie??? >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>------------^^^^^^^^^^^^^^^^
       dispatch(setUser(data.user))
    })
}


export const signUserUp = (userInfo) => dispatch =>{
  fetch('http://localhost:3009/api/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
  },
  body: JSON.stringify(userInfo)
  })
  .then(res => res.json())
  .then(data =>{
     /*data format will be:
        {
            user: {},
            token: "lasd;l.lksdlfk.lksdlj"
        }
        */
       // SEND TO DATABASE INSTEAD OF LOCAL STORAGE
       //localStorage.setItem("token", data.token)
        //dispatch(setUser(data.user))
  })
}