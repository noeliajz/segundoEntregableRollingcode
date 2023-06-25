let localStorageArray = JSON.parse(localStorage.getItem('users')) || []


let userID = location.search.split('=')[1]

let user = localStorageArray.filter((usuario) => {
    return usuario.id === parseInt(userID)
})

if(!userID){
    const user1= localStorageArray.filter((usuario)=>{
        return usuario.login === true
    })
     if(user1[0].role === 'admin'){
        location.href = `admin.html?id=${user1[0].id}`
     }else if( user1[0].role === 'user'){
        location.href = `vistaUsuarioLogueado.html?id=${user1[0].id}`
     }else{
        location.href = 'login2.html'
     }
     
    }


