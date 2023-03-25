/* Declaración de constructor objeto Producto */
class Producto {
  constructor(producto) {
    this.name = producto.name;
    this.thumbnail = producto.thumbnail;
    this.cantidad = 1;
  }

  TotalDelCarrito() {
    this.cantidad;
  }
}

const cantidadTotal = document.getElementById('cantidadTotal')

/* Array carrito */
let carrito = [];

/* LocalStorage.getItem */
carrito = JSON.parse(localStorage.getItem("carrito")) || [];

/* Fetch renderiza pokemons de stock en el DOM */
const printProductos = async () => {
  const respuesta = await fetch("/api/pokedex/");
  const data = await respuesta.json();
  stockProductos = data;
}

printProductos()

/*  Funcion ya esta en favotitos */
const agregarAlCarrito = (productoId) => {
  const item = carrito.find((producto) => producto.name === productoId);
  if (item) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOut'
      },
      title: `${item.name} ya está en favoritos!`,
      /* imageUrl: `${photo.sprites.front_default}`, */
      imageHeight: 100,
      imageWidth: 100,
      showConfirmButton: false,
      timer: 2000
    });
    /*  Funcion argegar a favoritos por primera vez */
  } else {
    let newProducto = stockProductos.find((producto) => producto.name === productoId);
    carrito.push(new Producto(newProducto));
    carrito[ carrito.length - 1 ].TotalDelCarrito()

    Swal.fire({
      position: 'center',
      icon: 'success',
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutTopRight'
      },
      title: `${newProducto.name}`,
      /* imageUrl: `${newProducto.thumbnail}`, */
      imageHeight: 100,
      imageWidth: 100,
      text: "Se agregó correctamente a favoritos!",
      showConfirmButton: false,
      timer: 1100
    })
  }
  actualizarCarrito()
}

const deleteCart = (productoId) => {
  const item = carrito.find((producto) => producto.name === productoId);
  const index = carrito.indexOf(item);
  carrito.splice(index, 1);
  actualizarCarrito()
}

/*  Vaciar el array de favoritos */
const vaciarCarrito = document.getElementById('vaciarCarrito')
vaciarCarrito.addEventListener('click', () => {
  carrito.length = 0
  actualizarCarrito()
})


/*  Renderizar productos en favoritos */
const carritoWrapper = document.getElementById("carrito-wrapper")
const actualizarCarrito = () => {
  carritoWrapper.innerHTML = "";
  if (carrito.length === 0) {
    let aviso = document.createElement("div");
    aviso.innerHTML =
      `<p class="carritoVacio"> No hay favoritos!</p>`
    carritoWrapper.appendChild(aviso);
  } else {
    carrito.forEach((producto) => {
      let card = document.createElement("div")
      card.innerHTML = `
    <figure class="card mb-4 ">
      <div class="row g-0 my-row ">
          <div class="col-md-6">
             <div class="card-detalle">
                <p class="card-title">${producto.name} </p>
             </div>
          </div>
          <div class="col-md-3 d-flex">
                <button class="btn btn-primary eliminar" id="eliminar${producto.name}">Eliminar</button>
          </div>
      </div>
    </figure
    `
      carritoWrapper.appendChild(card);

      const botonDelete = document.getElementById(`eliminar${producto.name}`)
      botonDelete.addEventListener('click', () => {
        deleteCart(producto.name)
      })
    })
  }

  /* Guardar en localStorage.setItem el array de favoritos */
  localStorage.setItem('carrito', JSON.stringify(carrito))

  const productosCounter = document.getElementById("productosCounter")

  productosCounter.innerText = carrito.reduce((acumulador, elemento) => acumulador + elemento.cantidad, 0);

  const totalPrecioCarrito = document.getElementById('totalPrecioCarrito')

  totalPrecioCarrito.innerText = carrito.reduce((acumulador, elemento) => acumulador + elemento.cantidad, 0);
  totalCarrito = carrito.reduce((acumulador, elemento) => acumulador + elemento.cantidad, 0);
}

actualizarCarrito()



function cargarListado() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then(function (response) {
      return response.json();
    })
    .then(function (objetoJson) {
      const pokemons = objetoJson.results;


      pokemons.forEach(element => {
        let capsula = `<button class="poke-boton" onclick="cargarPokemon('${element.url}')">${element.name}</button>`;
        document.getElementById("contenedor-listado").innerHTML += capsula;
        cargarPokemon(element.url)
      });
    });
}
cargarListado();


/* obtener la data de un pokemon puntual */
function cargarPokemon(url) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (objetoJson) {
      const pokemon = objetoJson;
      crearCarta(pokemon);
    });
}

function crearCarta(poke) {
  let planilla = `
  <figure class="poke-card ">
      <h3> ${poke.name}</h3>
      <img src="${poke.sprites.front_default}" class="img" alt="">
      <button class="btn btn-primary" id="p${poke.name}">Agregar a favoritos</button>
  </figure>
`
  let carta = document.getElementById('contenedor-carta');
  carta.innerHTML = planilla
  const boton = document.getElementById(`p${poke.name}`)
  boton.addEventListener("click", () => {
    console.log('poke', poke);
    agregarAlCarrito(poke.name)
  })
}


