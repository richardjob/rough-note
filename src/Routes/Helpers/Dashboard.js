const { API } = require("../../backend")

export const getAllBinders = () => {
  const user = JSON.parse(window.localStorage.getItem('user')).email

  return fetch(`${API}/binders/${user}`, {
    method: "GET",
  }).then(response=>{
    return response.json()
  })
}

export const getBinder = (id) => {
  const user = JSON.parse(window.localStorage.getItem('user')).email

  return fetch(`${API}/binders/${user}/${id}`, {
    method: "GET",
  }).then(response=>{
    return response.json()
  })
}



export const createBinder = (name) => {
    const user = JSON.parse(window.localStorage.getItem('user')).email

    return fetch(`${API}/binders/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, user}),
      }).then(response=>{
        return response.json()
      })
}