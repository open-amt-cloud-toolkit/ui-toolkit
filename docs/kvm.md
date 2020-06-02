# Quickstart - To Bundle KVM control

This document shows how to bundle only KVM control and display it on a sample html page for testing. 

 - How to create a bundle for only KVM control
 - How to add to sample html file 

## Prerequisites

In order to deploy and make changes, the following tools and application has to be installed on your development machine
-   [Git](https://git-scm.com/)
-   [Visual Studio Code](https://code.visualstudio.com/) or any other IDE 
-   [Node.js](https://nodejs.org/)
-   [MPS](https://github.com/open-amt-cloud-toolkit/MPS) stands for **M**anagement **P**resence **S**erver
-   Intel AMT device is configured and connected to MPS. See the [MPS](https://github.com/open-amt-cloud-toolkit/MPS) for documentation.
-   Chrome Browser

## Download and Install MPS UI Toolkit

At a command prompt, run the following commands:
```
git clone https://github.com/open-amt-cloud-toolkit/ui-toolkit.git
cd ui-toolkit
npm install
```
## Create Bundle for KVM
At a command prompt navigate to the root of MPS_UI_Toolkit, run the below command.
> **Note:** Remove or rename the existing **kvm.core.min.js**  in **dist/**
```
npm run build-kvm-prod
```
A new **kvm.core.min.js** will be created in **dist/** directory.

## Add to sample html page

To display the KVM control on a sample web page, update following changes to the existing **src/sample/sampleKVM.htm** page.

```
<body>
  <div id="kvm"></div>
  <script src="../../dist/react/react.production.min.js" crossorigin></script>
  <script src="../../dist/react/react-dom.production.min.js"></script>
  <script src="../../dist/kvm.core.min.js" crossorigin></script>
  <script crossorigin>
    const e = React.createElement;
    var url = new URL(window.location.href);
    var params = new URLSearchParams(url.search);
    const domContainer = document.querySelector('#kvm');
    ReactDOM.render(e(uitk.RemoteDesktop, { deviceId: params.get('deviceId'), mpsServer: params.get('server')+'/relay', mouseDebounceTime: 200, canvasHeight: "100%", canvasWidth: "100%" } ), domContainer);
  </script>
</body>
```
## Test the sample page
At a command prompt navigate to the root of MPS_UI_Toolkit, run the below command.
```
npx serve
```
Open Chrome browser, navigate to the following url
```
http://<localhost>:5000/src/sample/sampleKVM.htm?deviceId=<device GUID>&server=<mps IPaddress>:<mps port>
```
You will see the errors in the following scenario's: 
 - compilation errors if ui-toolkit has not downloaded and installed to your react app.
 - MPS server not running
 - MPS server running and device not connected.

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
