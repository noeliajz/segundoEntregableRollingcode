const cardDeListaUsuario = JSON.parse(localStorage.getItem('listaUsuario'))
const divCardsLista = document.getElementById('divCardsLista')

divCardsLista.innerHTML = cardDeListaUsuario.map((pelicula) => 
` 
<div class="card m-3 text-center col-10 col-md-4 col-lg-3" >
    <img src="${pelicula.img}" class="card-img-top" alt="..."  width= "200px" height= "200px">
    <div class="card-body">
      <h5 class="card-title">${pelicula.titulo} </h5>
      <p class="card-text">Género:  ${pelicula.genero}</p>
      <p class="card-text">${pelicula.descripcion}</p>
      <button type='button' id= "eliminarPeliculaLista" class="btn" onclick="eliminarPeliculaDeLista(${pelicula.id})"><i class="fa-solid fa-trash fa-shake fa-xl" style="color: #ff0000;"></i></button>
      </div>
    </div>

      
`
)
.join(''); 

//borrado fisico
 const eliminarPeliculaDeLista = (id) => {
  console.log(id)
  const listaPeliculaFilter = cardDeListaUsuario.filter((pelicula) => pelicula.id !== id)
  localStorage.setItem('listaUsuario',JSON.stringify(listaPeliculaFilter))
  location.reload()
} 
  


/*   const eliminarPeliculaDeLista = (id) => {
     
    const userIndex = cardDeListaUsuario.findIndex((pelicula) => pelicula.id === id)
    cardDeListaUsuario[userIndex].deleted = true
    localStorage.setItem('listaUsuario', JSON.stringify(cardDeListaUsuario))
    location.reload()
   
}
 */