# Quickstart: Add MPS UI Toolkit controls to WebUI

This document shows how to integrate controls from MPS UI Toolkit into a create-react-app for testing or development.

- How to create a new react app.
- How to add UI controls to react app.
- How to create bundles for each UI control

## Prerequisites

In order to deploy and make changes, the following tools and application has to be installed on your development machine

- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) or any other IDE
- [Node.js](https://nodejs.org/)
- [MPS](https://github.com/open-amt-cloud-toolkit/mps) stands for **M**anagement **P**resence **S**erver
- [RPS](https://github.com/open-amt-cloud-toolkit/rps) stands for **R**emote **P**rovisioning **S**erver
- Build and deploy MPS and RPS MicroServices locally.
- Intel AMT device is configured and connected to MPS. See the [MPS](https://github.com/open-amt-cloud-toolkit/mps) for documentation.
- Chrome Browser

## Create a New React App

At a command prompt, go to your desired developement directory on your machine.
Run the following commands to create sample react-app named **my-app**.

```
npx create-react-app my-app
cd my-app
npm start
```

> **Note**: By default react-app runs on port 3000. If port 3000 is already used by MPS server or any other app, it prompts to use other port, enter 'Y'.

Similar to below output would display on your terminal. By default, it launches the default browser on your machine.

```
You can now view my-app in the browser.
Local: http://localhost:3001
On Your Network: http://172.16.17.4:3001
```

Press **ctrl+c** on terminal to exit application.

## Add UI Toolkit

To access UI controls in react app , add the following line to dependencies section in **my-app/package.json** :

```
"ui-toolkit": "git+https://github.com/open-amt-cloud-toolkit/ui-toolkit.git"

```

At a command prompt navigate to the root of react app, and run the following commands to install ui-toolkit to node-modules and run the web UI locally:

```
npm install
npm start

```

### Add KVM Control

The following code snippet shows how to add KVM control to the React application.
Open **src/App.js**, add the following code as show below:

> **Note:** Change **deviceId** value to your device GUID **mpsServer** value to your MPS server address and appropriate webport.

```
import React from "react";
import "./App.css";
import { KVM, MpsProvider } from "ui-toolkit";
import '../node_modules/ui-toolkit/i18n.ts';

function App() {
  const data = {
    mpsKey: '<MPS API key>'
  };

  return (
    <div className="App">
      <MpsProvider data={data}>
        <KVM deviceId="<d12428be-9fa1-4226-9784-54b2038beab6>"
        mpsServer="<192.168.1.38>:<3000>/relay"
        mouseDebounceTime="200"
        canvasHeight="100%"
        canvasWidth="100%"></KVM>
      </MpsProvider>
    </div>
  );
}

export default App;
```

### Add Audit Log Control

The following code snippet shows how to add Audit Log control to the React application.
Open **src/App.js**, add the following code as show below:

> **Note:** Change **deviceId** value to your device GUID **mpsServer** value to your MPS server address and appropriate webport.

```
import React from "react";
import "./App.css";
import { AuditLog, MpsProvider } from "ui-toolkit";

function App() {

  const data = {
    mpsKey: '<MPS API key>'
  };
  return (
    <div className="App">
      <MpsProvider data={data}>
        <AuditLog
       deviceId="<d12428be-9fa1-4226-9784-54b2038beab6>"
       mpsServer="<192.168.1.38>:<3000>"></AuditLog>
      </MpsProvider>
    </div>
  );

}

export default App;
```

### Add Device Grid Control

The following code snippet shows how to add Device Grid control to the React application.
Open **src/App.js**, add the following code as show below:

> **Note:** Change **mpsServer** value to your MPS server address and appropriate webport.

```
import React from "react";
import { DeviceGrid, MpsProvider } from "ui-toolkit";
import '../node_modules/ui-toolkit/i18n.ts'

function App() {
  const data = {
    mpsKey: '<MPS API key>'
  };
  return (
    <div>
      <MpsProvider data={data}>
        <DeviceGrid
          mpsServer="<192.168.1.38>:<3000>"></DeviceGrid>
      </MpsProvider>
    </div>
  );
}

export default App;
```

### Add Serial Over LAN Control

The following code snippet shows how to add Serial Over LAN control to the React application.
Open **src/App.js**, add the following code as show below:

> **Note:** Change **deviceId** value to your device GUID **mpsServer** value to your MPS server address and appropriate webport.

```
import React from "react";
import { Sol, MpsProvider } from "ui-toolkit";
import '../node_modules/ui-toolkit/i18n.ts'

const App = () => {
  const data = {
    mpsKey: '<MPS API key>'
  };
  return (
    <div>
      <MpsProvider data={data}>
        <Sol deviceId="d12428be-9fa1-4226-9784-54b2038beab6"
        mpsServer="192.168.1.38:3000"></Sol>
      </MpsProvider>
    </div>
  );
}

export default App;
```

### Add Profile Control

Open **src/App.js**, add the following code as show below:

> **Note:** Change **rpsServer** value to your RPS server address and appropriate webport.**rpsKey** value is the value set to **xapikey** in .rpsrc file in rps application root directory.

```
import React from "react";
import { Profile, RpsProvider } from "ui-toolkit";
import '../node_modules/ui-toolkit/i18n.ts'

function App() {
  const data = {
    rpsKey: '<APIKEYFORRPS123!>'
  };
  return (
    <div>
      <RpsProvider data={data}>
        <Profile
        rpsServer="https://<192.168.1.38>:<8081>"/>
      </RpsProvider>
    </div>
  );
}

export default App;

```

### Add CIRA configs Control

Open **src/App.js**, add the following code as show below:

> **Note:** Change **rpsServer** value to your RPS server address and appropriate webport.**rpsKey** value is the value set to **xapikey** in .rpsrc file in rps application root directory.

```
import React from "react";
import { CiraEditor, RpsProvider } from "ui-toolkit";
import '../node_modules/ui-toolkit/i18n.ts'

function App() {
  const data = {
    rpsKey: '<APIKEYFORRPS123!>'
  };
  return (
    <div>
      <RpsProvider data={data}>
        <CiraEditor
        rpsServer="https://<192.168.1.38>:<8081>"/>
      </RpsProvider>
    </div>
  );
}

export default App;

```

### Add Domain Control

Open **src/App.js**, add the following code as show below:

> **Note:** Change **rpsServer** value to your RPS server address and appropriate webport.**rpsKey** value is the value set to **xapikey** in .rpsrc file in rps application root directory.

```
import React from "react";
import { DomainEditor, RpsProvider } from "ui-toolkit";
import '../node_modules/ui-toolkit/i18n.ts'

function App() {
  const data = {
    rpsKey: 'APIKEYFORRPS123!'
  };
  return (
    <div>
      <RpsProvider data={data}>
        <DomainEditor
        rpsServer="https://192.168.1.38:8081"/>
      </RpsProvider>
    </div>
  );
}

export default App;

```

### Test the changes

At a command prompt navigate to the root of react app, and run the web UI locally if it has been stopped:

```
npm start
```

Go to the chrome browser, ensure controls shows up correctly.

You will see the errors in the following scenario's:

- compilation errors if ui-toolkit has not downloaded and installed to your react app.
- MPS / RPS server not running, appropriate controls fail to work.
- MPS server running and device not connected.
- If your browser is IE / Edge, there might be some compatibility issues.

## Customize and create bundles

- [AuditLog](docs/auditLog.md)
- [KVM](docs/kvm.md)
- [Device Grid](docs/DeviceGrid.md)
- [Serial Over LAN](docs/SerialOverLAN.md)
- [Profile Editor](docs/Profiles.md)
- [CIRA Configs](docs/CIRAConfigs.md)
- [Domains](docs/Domains.md)

## License Note

If you are distributing the FortAwesome Icons, please provide attribution to the source per the [CC-by 4.0](https://creativecommons.org/licenses/by/4.0/deed.ast) license obligations.
