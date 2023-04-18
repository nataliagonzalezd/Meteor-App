# Meteor-App  
[Ver en Español](./README.es.md)

Online shopping cart application using Meteor.js technology and a MongoDB database

## Prerequisites

  Node.js version
  Node.js version &gt;= 10 and &lt;= 14 is required.

### Installation

Install the latest official version of Meteor.js from your terminal by running one of the commands below.

For Windows, Linux and OS X, you can run the following command:

```bash
npm install -g meteor
```

An alternative for Linux and OS X, is to install Meteor by using curl:

```bash
curl https://install.meteor.com/ | sh
```

> ⚠️ During the installation the PATH to the meteor binary is added to your terminal source, to have it working fine is needed to restart the terminal or run `source <your_terminal_source>`. Depending on the terminal the source file
could be `.bashrc`, `.bash_profile`, or `.zshrc`

> ℹ️ For more information, please visit the [Meteor documentation page](https://docs.meteor.com/install.html)

The first steps to use the application are:


  Download the repository.
  Go to the repository directory.
  Once Meteor is installed, run the following command in the terminal to install the project dependencies:
  
  ```bash
meteor npm install
```

Run the command `meteor`on Windows or `meteor run`on Linux to start the application on localhost.

## Github Credentials

In order to our Github login works, we need to get our Github Credentials first. Register your OAuth Application on [this link](https://react-tutorial.meteor.com/simple-todos/08-adding-login-with-github.html) filling the Application Name, Homepage URL, and the Authorization callback URL, for both URLs you can use http://localhost:3000 for now. Click on Register Application.

On the next screen, grab your Client ID and click on Generate a new client secret and copy your new client secret. We are going to use both of these keys to connect to Github.

Now, we need to configure our server to fully connect to Github:

1.Create a file called settings.json in the root folder of your project. 

Add the following content to the settings.json file, 

```json
{
"private": {
"github": {
"clientId": "your-client-id",
"secret": "your-client-secret"
}
}
}
```

replacing your-client-id and your-client-secret with your own Github credentials.

To complete the Github integration setup, you also need to uncomment the lines of code in main.js from line 30 to 40. These lines configure the Meteor application to connect to Github using the credentials specified in the settings.json file. Once you have uncommented these lines and added your Github credentials to the settings.json file, you should be able to use Github OAuth to log in to your Meteor application.

> ℹ️  For more information, please visit the [Meteor documentation page](https://react-tutorial.meteor.com/simple-todos/08-adding-login-with-github.html)
