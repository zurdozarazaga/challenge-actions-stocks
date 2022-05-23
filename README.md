### Challenge Acciones (Stocks) - (En proceso)

App que obtiene los datos del mercado de la API en su version free de  * [twelvedata](https://api.twelvedata.com/ ).
En la misma se puede elegir y agregar las acciones que desea ver. 
Una vez que tenga las acciones listadas, puede ingresar individualemtne a cada una de ellas y ver sus datos. Si lo desea tambien se puede eliminar de la lista.
Los datos te los muestra en una grafica y puede seleccionar en tiempo real, ver los datos historicos o por intervalos de 1, 5 y 15 minutos. 

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._


### Pre-requisitos 📋
Deberas tener instalado lo siguiente :
    * [Node.js](https://nodejs.org/)
    * [npm](https://www.npmjs.com/)
    * [Git](https://git-scm.com/)

    
### Instalación 🔧

    * Instala Node.js y npm:
        ```
        npm install -g npm
        npm install -g node
        ```
  Clona el repositorio en tu máquina local:

  Una vez dentro del directorio del proyecto, ejecuta:

     *
        ```
        npm install
        
        ```

  Luego para ejecutar el proyecto:

    *
        ```
        npm start
        ```
  Se te abrirá un ambiente de desarrollo en el navegador en el que podrás interactuar con el proyecto.
  
### Configuración 🔧

Cree un archivo .env en la raiz del proyecto con la siguiente configuración:
```
REACT_APP_TWELVE_DATA_BASE_URL = https://api.twelvedata.com/
REACT_APP_TWELVE_DATA_API_KEY = <API_KEY>
 
Para obtenerla API_KEY debe loguearse en el sitio web https://twelvedata.com/

### TECNOLOGIAS 🔧

Para la realización de este proyecto se basó integramente con la libreria ReactJS

Para la maquetación y estilos se utilizó Tailwind CSS.

Para el manejo del login se utilizó la libreria react-hook-form.

Para el manejo de estados se utilizó la libreria redux toolkit y  react-redux.

Los datos se consumieron desde la API de https://api.twelvedata.com/ 
