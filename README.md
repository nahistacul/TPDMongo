# Actividad 2
@@ Creando API Node y versionado


### Paso 1
clonar Repositorio

Paso 2
Teniendo instalado node.js es tenemos acceso al client npm

Para iniciar un proyecto 
```
npm init -yes
```


luego instalaremos las librerias Express y Morgan

```
npm i express morgan
```

Express es un framework de NodeJS que nos permitirá ahorrarnos muchas líneas de código para crear nuestro servidor y por consiguiente nuestros servicios web.
Morgan es una herramienta para desarrolladores que nos permite ver en consola las peticiones HTTP que hagan a nuestros servicios del API

```
npm i nodemon -D
```

Nodemon es una herramienta de desarrolladores que nos permite mantener una ejecución de scripts, por ejemplo levantar un servidor, sin necesidad de esta ejecutándolo cada vez que hagamos un cambio, para que se entienda más fácilmente hagamos una analogía: es como aquella herramienta que hace que cuando escribes tu HTML y CSS y guardas, se refresque la página y así te evitas estas actualizándola manualmente cada vez.


Una vez que tenemos nuestras herramientas de desarrollo instaladas.
Creamos el archivo index.js en la carpeta src

Em dicho archivo crearemos la constante llamada express que sería la que nos permite usar el framework, la incializamos y asignamos a la constante app, hacemos lo mismo para morgan, con las siguientes líneas de código:
```
const express = require('express');
const app = express();
const morgan=require('morgan');
```

Luego settearemos el puerto donde corre nuestra API
```
//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2) // mejora la visualizacion en navegador web
```

Agregamos nuestro middleware
```
//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
```

expondremos en nuesta API la buena práctica es hacerlo con un enrutamiento definido, y así lo haremos aquí, pero para ir probando nuestra api la codificaremos de momento aquí en index.js con el siguiente código:
```
//Nuestro primer WS Get
app.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Hola mundo"
        }
    );
})
```

Finalmente codificamos el listening que es para que nuestro servidor funcione y "escuche" el puerto que le hemos indicado líneas arriba:
```
//Iniciando el servidor, escuchando...
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});
```


Probamos nuestro codigo corriendo el siguiente comando en una terminal:
```
node src/index.js
```

Nota: para cortar la ejecución en la terminal CTRL+C

Para verificar nuestro GET a la app, abrimos una nueva pestaña en el navegador en el puerto que definimos en los pasos anteriores
```
http://localhost:3000
```


### Tarea en Git/github
Habiendo probado el funcionamiento realizar commit en el repo local en la rama GrupoX (siendo X el Grupo designado por la catedra)
Subir en la rama principal del GrupoX en el repo de Github


## Pasos adicionales
Enrutamiento
Una buena práctica manejar los enrutamientos de forma ordenada por eso vamos a modificar el archivo index.js 

Para ello crearemos la carpeta router dentro de src y agregamos un nuevo archivo index.js
```
const { Router } = require('express');
const router = Router();
 
//Raiz
router.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Hola mundo usando rutas!"
        }
    );
})
 
module.exports = router;
```

reemplazamos en el archivo index.js la seccion Nuestro primer WS Get
por lo siguiente
```
//Routes
app.use(require('./routes/index'));
```

### Git / Github
Realizar commit en una rama llamada routerGX (X nombre grupo)
Subir a github la rama routerGX y realizar un pull request y mergear
Luego del merge elimiar el branch routerGX en github


## Automatizando tareas

Como nos hemos percatado cada vez que hacemos un cambio y guardamos debemos detener la ejecución en consola con CTRL+C y ejecutar nuevamente el comando node, es aquí donde entra a tallar nodemon, para usarlo vamos al archivo package.json y agregamos un nuevo script:
```
"dev": "nodemon src/index.js"
```

Ahora basta con ejecutar una vez:
```
npm run dev
```


### Git / Github
Realizar commit en una rama llamada routerGX (X nombre grupo)
Subir a github la rama routerGX y realizar un pull request y mergear
