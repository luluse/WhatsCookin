const setUser = payload => ({ type: "SET_USER", payload})

export const logUserOut = () => ({ type: "LOG_OUT", payload})



export const fetchUser = (userInfo) => dispatch => {
    fetch(`http://localhost:3009/api/login`, {
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
        localStorage.setItem("token", data.token)
        dispatch(setUser(data.user))
    })
}


export const signUserUp = (userInfo) => dispatch =>{
  fetch(`http://localhost:3009/api/users`, {
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
       localStorage.setItem("token", data.token)
        dispatch(setUser(data.user))
  })
}

export const autoLogin = () => dispatch => {
  fetch(`http://localhost:3009/api/users`, {
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
  })
  .then(res => res.json())
  .then(data => {
      // data sent back will in the format of
      // {
      //     user: {},
      //.    token: "aaaaa.bbbbb.bbbbb"
      // }
      localStorage.setItem("token", data.token)
      dispatch(setUser(data.user))
  })
}



/*
login -> form 
form takes in username and password
form -> triggers a handleSubmit 
handleSubmit triggers backend asking "do we have this username?" && "does the password match?"
access -> 

/*