//////////CARRITO//////////
const stockProductos = [
    {
      id: 1,
      nombre: "Súper Mario Bros",
      cantidad: 1,
      desc: "Animación, Familia, Aventura, Fantasía, Comedia",
      precio: 1200,
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zNKs1T0VZuJiVuhuL5GSCNkGdxf.jpg",
    },
    {
      id: 2,
      nombre: "Spider-Man",
      cantidad: 1,
      desc: "Luchas con los mejores graficos",
      precio: 1500,
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qqXTerrQYwg9pIMhb1GFbxa3WUz.jpg",
    },
    {
      id: 3,
      nombre: "Transformers",
      cantidad: 1,
      desc: "Acción, Aventura, Ciencia ficción",
      precio: 1570,
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3oypSaTizrfBbpIeRs8tTOF2EqV.jpg",
    },
    {
      id: 4,
      nombre: "Fast & Furious X (2023)",
      cantidad: 1,
      desc: "Acción, Crimen, Suspense",
      precio: 1000,
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4A76udAc8XWmLs1T29Kocw5Go3H.jpg",
    },
    {
      id: 5,
      nombre: "Perros de caza (2023)",
      cantidad: 1,
      desc: "Action & Adventure, Drama, Crimen",
      precio: 1200,
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pWzp4HpDifuyNF8zkPIy8MKCg2d.jpg",
    },
    {
      id: 6,
      nombre: "El Gato con Botas",
      cantidad: 1,
      desc: "Animación, Familia, Fantasía, Aventura, Comedia",
      precio: 1200,
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lyP4WNmUiiOgl4g2z7ywE0z6SGF.jpg",
    },
    {
      id: 7,
      nombre: "Titanic II (2010)",
      cantidad: 1,
      desc: "Acción, Aventura",
      precio: 1400,
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dGimwAyUWnZoffWTiiWnf9mFxV2.jpg",
    },
    {
      id: 8,
      nombre: "The Rookie (2018)",
      cantidad: 1,
      desc: "Crimen, Drama",
      precio: 1200,
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ts1Xda9uefLPZtREJ7EboHZga0u.jpg",
    },
    {
      id: 9,
      nombre: "Ant-Man y la Avispa",
      cantidad: 1,
      desc: "Acción, Aventura",
      precio: 1400,
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lKHy0ntGPdQeFwvNq8gK1D0anEr.jpg",
    },
    {
      id: 10,
      nombre: "Scream 4 (2011)",
      cantidad: 1,
      desc: "Terror, Misterio",
      precio: 1200,
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sr7WNBgjX1UH9yw4Qq4o6GLAyVf.jpg",
    },
  ];
let carrito = [];

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector('#procesar-pago')

if (activarFuncion) {
  activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  mostrarCarrito();
  document.querySelector("#activarFuncion").click(procesarPedido);
});
if(formulario){
  formulario.addEventListener('submit', enviarCompra)
}


if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
  });
}

if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Compra algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      location.href = "compra.html";
    }
  });
}

stockProductos.forEach((prod) => {
  const { id, nombre, precio, desc, img, cantidad } = prod;
  if (contenedor) {
    contenedor.innerHTML += `
    <div class="card mt-3 mx-2" style="width: 17rem;"   >
    <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: ${precio}</p>
      <p class="card-text">Descripcion: ${desc}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>
      <button class="btn fs-4 " style="color: #FF8303;" onclick="agregarProducto(${id})">Comprar Producto</button>
    </div>
  </div>
    `;
  }
});

const agregarProducto = (id) => {
    const existe = carrito.some(prod => prod.id === id)
  
    if(existe){
      const prod = carrito.map(prod => {
        if(prod.id === id){
          prod.cantidad++
        }
      })
    } else {
      const item = stockProductos.find((prod) => prod.id === id)
      carrito.push(item)
    }
    mostrarCarrito()
  
  };
  
  const mostrarCarrito = () => {
    const modalBody = document.querySelector(".modal .modal-body");
    if (modalBody) {
      modalBody.innerHTML = "";
      carrito.forEach((prod) => {
        const { id, nombre, precio, desc, img, cantidad } = prod;
        console.log(modalBody);
        modalBody.innerHTML += `
        <div class="modal-contenedor">
          <div>
          <img class="img-fluid img-carrito" src="${img}"/>
          </div>
          <div>
          <p>Producto: ${nombre}</p>
        <p>Precio: ${precio}</p>
        <p>Cantidad :${cantidad}</p>
        <button class="btn "  onclick="eliminarProducto(${id})"><i class="fa-solid fa-trash fa-shake fa-xl" style="color: #ff0000;"></i></button>
          </div>
        </div>
        
    
        `;
      });
    }
    if (carrito.length === 0) {
        console.log("Nada");
        modalBody.innerHTML = `
        <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
        `;
      } else {
        console.log("Algo");
      }
      carritoContenedor.textContent = carrito.length;
    
      if (precioTotal) {
        precioTotal.innerText = carrito.reduce(
          (acc, prod) => acc + prod.cantidad * prod.precio,
          0
        );
      }
    
      guardarStorage();
    };


    function guardarStorage() {
        localStorage.setItem("carrito", JSON.stringify(carrito));
      }
      
      function eliminarProducto(id) {
        const juegoId = id;
        carrito = carrito.filter((juego) => juego.id !== juegoId);
        mostrarCarrito();
      }
      function procesarPedido() {
        carrito.forEach((prod) => {
          const listaCompra = document.querySelector("#lista-compra tbody");
          const { id, nombre, precio, img, cantidad } = prod;
          if (listaCompra) {
            const row = document.createElement("tr");
            row.innerHTML += `
                    <td>
                    <img class="img-fluid img-carrito" src="${img}"/>
                    </td>
                    <td>${nombre}</td>
                  <td>${precio}</td>
                  <td>${cantidad}</td>
                  <td>${precio * cantidad}</td>
                  `;
            listaCompra.appendChild(row);
          }
        });
        totalProceso.innerText = carrito.reduce(
          (acc, prod) => acc + prod.cantidad * prod.precio,
          0
        );
      }
// finalizo el listado de la compra
      function enviarCompra(e){
        e.preventDefault()
        const persona = document.querySelector('#persona').value
        const email = document.querySelector('#correo').value
     
        if(email === '' || persona == ''){
          Swal.fire({
            title: "¡Debes completar tu email y nombre!",
            text: "Rellena el formulario",
            icon: "error",
            confirmButtonText: "Aceptar",
        })
      } else {
     
        const btn = document.getElementById('button');

        // document.getElementById('form')
        //  .addEventListener('submit', function(event) {
        //    event.preventDefault();
        
           btn.value = 'Enviando...';
        
           const serviceID = 'default_service';
           const templateID = 'template_7763kru';
        
           emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
              btn.value = 'Finalizando Compra';
              alert('Enviado a nuestra DB SCREENFLIX!');
            }, (err) => {
              btn.value = 'Finalizando Compra';
              alert(JSON.stringify(err));
            
        });


// finalizo el listado de la compra


const spinner = document.querySelector('#spinnerr')
   spinner.classList.add('d-flex')
   spinner.classList.remove('d-none')

   setTimeout(() => {
     spinner.classList.remove('d-flex')
     spinner.classList.add('d-none')
     formulario.reset()

     const alertExito = document.createElement('p')
     alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success')
     alertExito.textContent = 'Compra realizada correctamente'
     formulario.appendChild(alertExito)

     setTimeout(() => {
       alertExito.remove()
     }, 3000)


   }, 3000)
  }
 localStorage.clear()
}
 

//////////CARRITO//////////