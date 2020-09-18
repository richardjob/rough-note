export const isAuthenticated = () => {
    if(!!window.localStorage.getItem('user')) return true
    else return false
}