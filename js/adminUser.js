let usersLocalStorage = JSON.parse(localStorage.getItem('users')) || []
let userID = location.search.split('=')[1]
let user = usersLocalStorage.filter((usuario)=> {
    return usuario.id === parseInt(userID)
})

const tbodyUser = document.getElementById('tbodyUser')
let userIndex = usersLocalStorage.findIndex((user)=> user.id === parseInt(userID))

tbodyUser. innerHTML = usersLocalStorage.map((user)=>

    user.deleted === false
    ?
    `
    <tr>
    <th> ${user.id}</th>
    <td> ${user.username}</td>
    <td> ${user.role}</td>
    <td>
    
    <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal2${user.id}">
     Editar
    </button>
    
    <button id= "buttonDeleted" class= "btn btn-danger" onclick= 'deleteUser(${user.id})'> Eliminar </button>
    
    <div class="modal fade" id="exampleModal2${user.id}" tabindex="-1" aria-labelledby="exampleModalLabel2${user.id}" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5 text-black" id="exampleModalLabel2${user.id}"> Usuario</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label text-black">Usuario</label>
            <input type="text" class="form-control" id="inputUser${user.id}" aria-describedby="emailHelp" value= ${user.username} name='user'>
            
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword13${user.id}" class="form-label text-black">Role</label>
            <input type="password" class="form-control" id="exampleInputPassword13${user.id}">
          </div>
          <button type="button" class="btn btn-secondary" onclick='editUser(${user.id})'>Guardar Cambios</button>
        </form>
          </div>
          
        </div>
      </div>
    </div>
        
    </td>
    
    
    
    ` 
    :
    ''


).join('')






const inputUser =document.querySelectorAll ('input[name="user"]');
const buttonDeleted = document.getElementById('buttonDeleted')

let inputChangeUser = ''

const editFunction = (event) => {
    const { value } = event.target;
    inputChangeUser = value
}

inputUser.forEach((inputUser)=> {
    inputUser.addEventListener('input', editFunction);
});

const editUser = (id) => {
    const userEditIndex = usersLocalStorage.findIndex((user) => user.id === id)
    usersLocalStorage[userEditIndex].username = inputChangeUser
    localStorage.setItem('users', JSON.stringify(usersLocalStorage))
    inputChangeUser= ''
    location.reload()
}

// const deleteUser = (id) => {
//     console.log(id)
// }

 const deleteUser = (id) => {
     
     const userIndex = usersLocalStorage.findIndex((user) => user.id === id)
     usersLocalStorage[userIndex].deleted = true
     localStorage.setItem('users', JSON.stringify(usersLocalStorage))
     location.reload()
    
 }