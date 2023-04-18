<h1>Meteor-App</h1>
<p>Online shopping cart application using Meteor.js technology and a MongoDB database</p>

<h2>Prerequisites</h2>
<p>Node.js version</p>
<p>Node.js version &gt;= 10 and &lt;= 14 is required.</p>

<h3>Installation</h2>
Install the latest official version of Meteor.js from your terminal by running one of the commands below.
<p>For Windows, Linux and OS X, you can run the following command:</p>

<pre><code class="css">npm install -g meteor</code></pre>

An alternative for Linux and OS X, is to install Meteor by using curl:

<pre><code class="css">curl https://install.meteor.com/ | sh</code></pre>
<p>For more information, please visit the <a href="https://docs.meteor.com/install.html" target="_blank">Meteor documentation page</a>.</p>

<p>The first steps to use the application are:</p>

<ol>
  <li>Download the repository.</li>
  <li>Go to the repository directory.</li>
  <li>Once Meteor is installed, run the following command in the terminal to install the project dependencies:</li>
  <pre><code class="css">meteor npm install</code></pre>
  <li>Run the command <code class="css">meteor</code> on Windows or <code class="css">meteor run</code> on Linux to start the application on localhost.</li>
</ol>

<h2>Github Credentials</h2>

<p>In order to our Github login works, we need to get our Github Credentials first. Register your OAuth Application on this link filling the Application Name, Homepage URL, and the Authorization callback URL, for both URLs you can use http://localhost:3000 for now. Click on Register Application.

On the next screen, grab your Client ID and click on Generate a new client secret and copy your new client secret. We are going to use both of these keys to connect to Github.

Now, we need to configure our server to fully connect to Github:

1.Create a file called settings.json in the root folder of your project. 

Add the following content to the settings.json file, 
  
<pre>
<code class="css">
{
  "private": {
    "github": {
      "clientId": "your-client-id",
      "secret": "your-client-secret"
    }
  }
}
</code>
</pre>

replacing your-client-id and your-client-secret with your own Github credentials.

To complete the Github integration setup, you also need to uncomment the lines of code in main.js from line 30 to 40. These lines configure the Meteor application to connect to Github using the credentials specified in the settings.json file. Once you have uncommented these lines and added your Github credentials to the settings.json file, you should be able to use Github OAuth to log in to your Meteor application.

<p>For more information, please visit the <a href="https://react-tutorial.meteor.com/simple-todos/08-adding-login-with-github.html" target="_blank">Meteor documentation page</a>.</p>

</p>

******************************************************************************************************************************************************

<h1>Meteor-App</h1>
<p>Aplicación de carrito de compras en línea utilizando la tecnología Meteor.js y una base de datos MongoDB</p>

<h2>Prerrequisitos</h2>
<p>Versión de Node.js</p>
<p>Se requiere una versión de Node.js >= 10 y <= 14.</p>


<h3>Instalación</h2>
Instala la última versión oficial de Meteor.js desde tu terminal ejecutando uno de los comandos a continuación.
<p>Para Windows, Linux y OS X, puedes ejecutar el siguiente comando:</p>

<pre><code class="css">npm install -g meteor</code></pre>

Una alternativa para Linux y OS X, es instalar Meteor usando curl:

<pre><code class="css">curl https://install.meteor.com/ | sh</code></pre>
<p>Para más información pueden visitar la <a href="https://docs.meteor.com/install.html" target="_blank">página de documentación de Meteor</a>.</p>

<p>Los primeros pasos para utilizar la aplicación son:</p>

<ol>
  <li>Descargar el repositorio.</li>
  <li>Ir a la dirección del repositorio.</li>
  <li>Una vez que Meteor esté instalado, ejecuta el siguiente comando en la terminal para instalar las dependencias del proyecto:</li>
  <pre><code class="css">meteor npm install</code></pre>
  <li>Ejecutar el comando <code class="css">meteor</code> en caso de ser Windows o <code class="css">meteor run</code> en caso de ser Linux para levantar la aplicación en el localhost.</li>
</ol>



