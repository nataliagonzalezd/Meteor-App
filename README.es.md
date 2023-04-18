
# Aplicación Meteor

Carrito de compras en línea utilizando tecnología Meteor.js y una base de datos MongoDB

## Requisitos previos

  Se requiere la versión de Node.js >= 10 y <= 14.

### Instalación

Instale la última versión oficial de Meteor.js desde su terminal ejecutando uno de los siguientes comandos.

Para Windows, Linux y OS X, puede ejecutar el siguiente comando:

```bash
npm install -g meteor
```

Una alternativa para Linux y OS X es instalar Meteor mediante curl:

```bash
curl https://install.meteor.com/ | sh
```

> ⚠️ Durante la instalación se agrega el PATH al binario de meteor a su origen de terminal, para que funcione correctamente es necesario reiniciar la terminal o ejecutar `source <your_terminal_source>`.Dependiendo de la terminal, el archivo de origen podría ser 
could be `.bashrc`, `.bash_profile`, o `.zshrc`

> ℹ️  Para obtener más información, visite la [página de documentación de Meteor](https://docs.meteor.com/install.html)

Los primeros pasos para utilizar la aplicación son:

Descargar el repositorio.
Ir al directorio del repositorio.
Una vez que se haya instalado Meteor, ejecute el siguiente comando en la terminal para instalar las dependencias del proyecto:
  
  ```bash
meteor npm install
```

Ejecute el comando `meteor` en Windows o `meteor run`en Linux para iniciar la aplicación en localhost.

## Credenciales de Github

Para que nuestro inicio de sesión en Github funcione, primero debemos obtener nuestras credenciales de Github. Registre su Aplicación OAuth en [este enlace](https://react-tutorial.meteor.com/simple-todos/08-adding-login-with-github.html) completando el Nombre de la aplicación, la URL de la página principal y la URL de autorización de devolución de llamada, para ambas URL puede utilizar http://localhost:3000 por ahora. Haga clic en Registrar aplicación.

En la siguiente pantalla, tome su ID de cliente y haga clic en Generar un nuevo secreto de cliente y copie su nuevo secreto de cliente. Vamos a utilizar ambas claves para conectarnos a Github.

Ahora, necesitamos configurar nuestro servidor para conectarnos completamente a Github:

Cree un archivo llamado settings.json en la carpeta raíz de su proyecto.
Agregue el siguiente contenido al archivo settings.json,

```json
{
"private": {
"github": {
"clientId": "your-client-id",
"secret": "your-client-secret"
}}
}
```

reemplazando tu-id-de-cliente y tu-secreto-de-cliente con sus propias credenciales de Github.

Para solucionar problemas con Github, puede intentar ejecutar la configuración con el siguiente comando:

  
  ```bash
meteor run --settings <path_to_your_settings_file>
```

Para completar la configuración de integración de Github, también debe descomentar las líneas de código en main.js desde la línea 30 hasta la 40. Estas líneas configuran la aplicación Meteor para conectarse a Github utilizando las credenciales especificadas en el archivo settings.json. Una vez que haya descomentado estas líneas y agregado sus credenciales de Github al archivo settings.json, debería poder usar OAuth de Github para iniciar sesión en su aplicación de Meteor.

> ℹ️  Para mayor informacion visite [la documentacion de Meteor](https://react-tutorial.meteor.com/simple-todos/08-adding-login-with-github.html)
