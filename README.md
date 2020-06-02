# Quickstart: Add MPS UI Toolkit controls to WebUI

This  document shows how to integrate controls from MPS UI Toolkit into a create-react-app for testing or development. 
-   How to create a new react app.
-   How to add UI controls to react app.
-   How to create bundles for each UI control

## Prerequisites

In order to deploy and make changes, the following tools and application has to be installed on your development machine
-   [Git](https://git-scm.com/)
-   [Visual Studio Code](https://code.visualstudio.com/) or any other IDE 
-   [Node.js](https://nodejs.org/)
-   [MPS](https://github.com/open-amt-cloud-toolkit/MPS) stands for **M**anagement **P**resence **S**erver
-	Intel AMT device is configured and connected to MPS. See the [MPS](https://github.com/open-amt-cloud-toolkit/MPS) for documentation.
-   Chrome Browser

## Create a New React App
At a command prompt, go to your desired developement directory on your machine.
Run the following commands to create sample react-app named **my-app**.

```
npx create-react-app my-app
cd my-app
npm start
```
>**Note**: By default react-app runs on port 3000. If port 3000 is already used by MPS server or any other app, it prompts to use other port, enter 'Y'.

Similar to below output would display on your terminal. By default, it launches the default browser on your machine.
```
You can now view my-app in the browser.
  Local:            http://localhost:3001
  On Your Network:  http://172.16.17.4:3001
```

Press **ctrl+c** on terminal to exit application.

## Add MPS UI Toolkit 
To access UI controls in react app , add the following line to dependencies section in **my-app/package.json** :

```
"ui-toolkit": "git+https://github.com/open-amt-cloud-toolkit/ui-toolkit.git"
```
At a command prompt navigate to the root of react app, and run the following commands to install ui-toolkit to node-modules and run the web UI locally:

```
npm install
npm start
```
### Add  KVM Control 

Open **src/App.js**, add the following code as show below:

> **Note:** Change **deviceId** value to your device GUID **mpsServer** value to your MPS server address and appropriate webport.

```
import  React  from  "react";
import { KVM } from  "ui-toolkit";
function  App() {
	return (
	<div>
	    <KVM  deviceId="038d0240-045c-05f4-7706-980700080009"
          mpsServer="localhost:3000/relay"
          mouseDebounceTime="200"
          canvasHeight="100%"
          canvasWidth="100%"></KVM>
	</div>
	);
}
export  default  App;
```
### Test the changes
At a command prompt navigate to the root of react app, and run the web UI locally if it has been stopped:

```
npm start
```
Go to the chrome browser, click on ‘connect to KVM’ and ensure remote device desktop shows up correctly.

You will the errors in the following scenario's: 
 - compilation errors if  ui-toolkit has not downloaded and installed to your react app.
 - MPS server not running
 - MPS server running and device not connected.
 - If your browser is IE / Edge, there might be some compatibility issues.

### Add  Audit Log Control 

Open **src/App.js**, add the following code as show below:

> **Note:** Change **deviceId** value to your device GUID **mpsServer** value to your MPS server address and appropriate webport.

```
import  React  from  "react";
import { AuditLog } from  "ui-toolkit";
import  '../node_modules/ag-grid-community/dist/styles/ag-grid.css';
import  '../node_modules/ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import  '../node_modules/ag-grid-community/dist/styles/agGridBalhamFont.css';

function  App() {
	return (
	<div>
	<AuditLog
	deviceId="038d0240-045c-05f4-7706-980700080009"
	mpsServer="localhost:3000"></AuditLog>
	</div>
	);
}
export  default  App;
```
### Test the changes
At a command prompt navigate to the root of react app, and run the web UI locally if it has been stopped:
```
npm start
```
Go to the chrome browser, ensure auditlogs shows up correctly.

You will see the errors in the following scenario's: 
 - compilation errors if  ui-toolkit has not downloaded and installed to your react app.
 - MPS server not running
 - MPS server running and device not connected.
 - If your browser is IE / Edge, there might be some compatibility issues.

## By-pass CORS Security for testing

To display UI controls on local react Web UI for **testing**, make the following changes to by-pass CORS.

- Go to your local **mps** application where it is running.
- Press **ctrl+c** to exit the application. 
- Edit the file **mps/src/server/webserver.ts** 
- Update the code as shown below to allow any origin by MPS 

Search for **X-Frame-Options** and update the code as shown below
```
//Clickjacking defence
this.app.use(function (req, res, next) {
	//res.setHeader('X-Frame-Options', 'SAMEORIGIN');
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers','*');
	if (req.method  ===  'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'POST');
		return  res.status(200).json({});
	}	
	next();
})
```
Search for **isAuthenticated** and comment the code as shown below
```
isAuthenticated(req, res, next) {
// if (req.session.loggedin){
// return next();
// }

// if (req.header('User-Agent').startsWith('Mozilla')) {
// // all browser calls that are not authenticated
// res.redirect('/login.htm')
// return;
// }

// // other api calls
// if(req.header('X-MPS-API-Key') !== process.env.XAPIKEY){
// res.status(401).end("Not Authenticated.")
// return;
// }
// else
return  next();
}
```
Search for **Handle upgrade on websocket** and comment the code as shown below

```
//Handle upgrade on websocket
this.server.on('upgrade', (request, socket, head) => {
    // this.sessionParser(request, {}, () => {
    // if (request.session && request.session.loggedin === true) { //Validate if the user session is active and valid. TODO: Add user validation if needed
        this.handleUpgrade(request, socket, head)
    // }
    // else if (request.headers['X-MPS-API-Key'] && //Validate REST API key
    //   request.headers['X-MPS-API-Key'] === this.config.mpsxapikey) {
    //   this.handleUpgrade(request, socket, head)
    // }
    // else {//Auth failed
    //   log.info('WebSocket authentication failed. Closing connection...');
    //   socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
    //   socket.destroy();
    // }
    // })
});
```
- Save the changes.
- At the command prompt, run the below command from the root of **mps** application 
```
npm start
```
## Create Bundle for each UI Control

 - [AuditLog](docs/auditLog.md)
 - [KVM](docs/kvm.md)

## License Note

If you are distributing the FortAwesome Icons, please provide attribution to the source per the [CC-by 4.0](https://creativecommons.org/licenses/by/4.0/deed.ast) license obligations.  
