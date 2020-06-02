# Quickstart - To Bundle AuditLog control

This document shows how to bundle only Audit Log control and display it on a sample html page for testing. 

 - How to create a bundle for only auditlog control
 - How to add to sample html file
 - How to add a new language for Internalization 

## Prerequisites

In order to deploy and make changes, the following tools and application has to be installed on your development machine
-   [Git](https://git-scm.com/)
-   [Visual Studio Code](https://code.visualstudio.com/) or any other IDE 
-   [Node.js](https://nodejs.org/)
-   [MPS](https://github.com/open-amt-cloud-toolkit/MPS) stands for **M**anagement **P**resence **S**erver
-	Intel AMT device is configured and connected to MPS. See the [MPS](https://github.com/open-amt-cloud-toolkit/MPS) for documentation.
-   Chrome Browser

## Download and Install MPS UI Toolkit

At a command prompt, run the following commands:
```
git clone https://github.com/open-amt-cloud-toolkit/ui-toolkit.git
cd ui-toolkit
npm install
```
## Create Bundle for AuditLog
At a command prompt navigate to the root of MPS_UI_Toolkit, run the below command.
> **Note:** Remove or rename the existing **auditlog.core.min.js**  in **dist/**
```
npm run build-auditlog-prod
```
A new **auditlog.core.min.js** will be created in **dist/** directory.

## Add to sample html page

To display the auditlog control on a sample web page, update following changes to the existing **src/sample/sampleAuditLog.htm** page.

```
<body>
<div id="auditlog"></div>
<script src="../../dist/react/react.production.min.js" crossorigin></script>
<script src="../../dist/react/react-dom.production.min.js"></script>
<script src="../../dist/auditlog.core.min.js"></script>
<script crossorigin>
const e = React.createElement;
var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
const domContainer = document.querySelector('#auditlog');
ReactDOM.render(e(uitk.App, { deviceId: params.get('deviceId'), mpsServer: params.get('server')} ), domContainer);
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
http://<localhost>:5000/src/sample/sampleAuditLog.htm?deviceId=<device GUID>&server=<mps IPaddress>:<mps port>
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
- Save the changes.
- At the command prompt, run the below command from the root of **mps** application 
```
npm start
```
## Add a new Language for Internationalization

 - Create a directory under **public/locales** with the directory name as per the [language](https://developers.google.com/admin-sdk/directory/v1/languages) 
 - Add the translation.json to **public/locales/en/translation.json** file under the new language directory. 
 - Customize the required field in the translation.json file. 
 - **Example**: To support for Kannada language, 
		 - Add the directory  **kn** to **public/locales**. 
		 - Copy the translation.json file from **public/locales/en**  to **public/locales/kn** 
		 - Update the **public/locales/kn/translation.json** file as per kanada langauage 
 - Modify the **/i18n.ts** file to import the newly added **public/locales/Language/translation.json** file and
   update the 'const resources' to include the new file. 
 - **Example** : To support for Kannada language modified **/i18n.ts** as below.
```
	import translationKN from './public/locales/kn/translation.json';
	const resources = {
	  en: {
		translations: translationEN
	  },
	  kn: {
		translations: translationKN
	  }
	};
```

Note: Rebuild and generate a new AuditLog bundle before testing the changes.

Language can be changed in the browser under langauage section of the browser settings. English is the default if no customized translation file provided for the langauage.
