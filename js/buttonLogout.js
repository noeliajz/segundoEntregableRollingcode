let usersLocalStorage = JSON.parse(localStorage.getItem('users')) || []

let userIDSearch = location.search.split('=')[1]
let user1 = usersLocalStorage.filter((usuario)=> {
    return usuario.id === parseInt(userIDSearch)
})

let userIndex = usersLocalStorage.findIndex((usuario) => usuario.id === parseInt(userIDSearch))

const buttonLogout = document.getElementById('logout')

const logout = () => {
    console.log('logout')
    usersLocalStorage[userIndex].login = false
    localStorage.setItem('users', JSON.stringify(usersLocalStorage))
    location.href = '../html/login2.html'
}

buttonLogout.addEventListener('click', logout)