Pokédex

0.- Este proyecto esta hecho con redis por lo tanto necesitas

1.- npm i

2.-
a) mongo - npm run prod (iniciar con mongo para el testing)
b) memory - npm run dev
c) file - npm run file

3.- En una terminal aparte del server que está corriendo ejecuta: (Testing de productos en mongo "get y post")
npm run testMocha "para correr el test de mocha"
npm run testAxios "para correr el test de Axios"

4.- Server alojado dentro de una clase ( aun falta importarlo en app.js)

5.- Datos de login:

Usuario: santi.iztli@gmail.com
Password: santipass

6.- Productos y carrito disponible.

7.- ( Chat no disponible aun)

# POKEDEX by thisisanti.dev

_Esta es una aplicación para guardar Pokémons favoritos y buscar su información consumiendo la PokeAPI_

## Screenshot

![Imagen](/public/img/Screenshot-pokedex.png)

## Comenzando 🚀

_Git clone para obtener un copia del proyecto_

_Ejecuta:_

```bash
git clone https://github.com/santi-iztli/pokedex
```

### Pre-requisitos 📋

_Programas necesatios_

```
Cualquier explorador Chrome, Firefox, Safari ...
```

- [Redis](https://redis.io/docs/getting-started/installation/install-redis-on-windows/) - Redis Local
- [VSCode](https://code.visualstudio.com/) - Descarga el editor de codigo

### Instalación 🔧

_Para visualidar este codigo se recomienda el editor de codigo VScode_

_Abrir proyecto en la capeta del proyecto en VScode_

```
cd pokedex
```

```
npm i && npm start
```

```
Ingresa a http://localhost:8090
```

```
Esta app require logear para poder usarla
```

```
Usuario de prueba:
Usuario: thisissanti.dev@gmail.com
Password: santipass
```

```
Puedes registarte en el enlace http://localhost:8090/api/auth/signup
```

```
Dentro de la app puedes:

1.- Agregar Pokémons a favoritos.
2.- Ver el listado de Pokémons.
3.- Buscar Pokémons.
4.- Ver el JSON de pokémons.
5.- Ver tu perfil de usuario con tus datos.

```

```
A disfrutar Pokedex 🚀
```

### Iniciar Sass ⌨️

_Para hacer modificaciones en en los estilos en la carpeta del protecto ejecuta:_

```
npm run sass
```

## Construido con 🛠️

_Tecnologias utilizadas en este proyecto:_

- [Node.js](https://nodejs.org/es/docs) - Entorno de ejecución js en el servidor.
- [bcrypt](https://openbase.com/js/bcrypt/documentation) - Función de hashing de contraseñas.
- [compression](https://www.npmjs.com/package/compression) - Node.js compression middleware.
- [cors](https://www.npmjs.com/package/cors) - CORS (Cross-Origin Resource Sharing).
- [express](https://expressjs.com/es/) - Entorno de trabajo para aplicaciones web.
- [passport](https://www.passportjs.org/) - Passport is authentication middleware.
- [winston](https://www.npmjs.com/package/winston) - Logger.
- [HTML](https://developer.mozilla.org/es/docs/Web/HTML) - Lenguaje de etiquetas de hipertexto
- [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/) - Framework CSS
- [Redis](https://redis.io/docs/getting-started/installation/install-redis-on-windows/) - Motor de base de datos en memoria
- [Mongo DB](https://www.mongodb.com/docs/) - Base de datos
- [Sass](https://sass-lang.com/documentation/) - Procesador de estilos
- [JavaScript](https://www.w3schools.com/js/js_es6.asp) - Lenguaje de programación interpretado ECMAScript 6

## Versionado 📌

```
1.0
```

## Autor ✒️

- **Santiago Morera** - _Trabajo Inicial_ - [Santiago Morera](https://thisissanti.dev/)
- **Santiago Morera** - _Documentación_ - [Santiago Morera](https://thisissanti.dev/)

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia)

---

⌨️ por [Santiago Morera](https://thisissanti.dev/) 😊

```

```
