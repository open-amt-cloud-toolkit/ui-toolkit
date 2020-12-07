# UI Toolkit

The UI Toolkit provides prebuilt, React-based components for integrating remote management features such as a keyboard, video, mouse (KVM) control into a web-based management console UI. The controls have a reference UI and layout that can be customized further to seamlessly integrate with existing management console solutions.

**For detailed documentation** about [Getting Started with the UI Toolkit](https://open-amt-cloud-toolkit.github.io/docs/1.0/Tutorials/uitoolkit) or other features of the Open AMT Cloud Toolkit, see the [docs](https://open-amt-cloud-toolkit.github.io/docs/).

## Prerequisites

To succesfully deploy the UI Toolkit using React, the following software must be installed on your development system:

- [Node.js* LTS 12.x.x or newer](https://nodejs.org/en/)
- [git](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com/) or any other IDE of choice
- [Management Presence Server](https://github.com/open-amt-cloud-toolkit/mps)
- [Remote Provisioning Server](https://github.com/open-amt-cloud-toolkit/rps)
- Activated Intel AMT device connected to MPS


## Create a New React App

The React app can be created in any preferred development directory. The MPS can continue to run while creating and running the app.

1. In a Command Prompt or Terminal, go to your preferred development directory. 

2. Run the following commands to create sample React app named `my-app`.

    ``` bash
    npx create-react-app my-app && cd my-app
    ```

## Add UI Toolkit

1. Run the following command to add the UI Toolkit and install the required dependencies:

    ``` bash
    npm install git+https://github.com/open-amt-cloud-toolkit/ui-toolkit.git --save
    ```

2. Run the following commands to start the web UI locally:

    ``` bash
    npm start
    ```

3. By default, React apps run on port `3000`. If port `3000` is already used by the MPS server or any other application, you'll be prompted to use another port. If this happens, enter 'Y'.

    Sample Output:

    ```
    You can now view my-app in the browser.
    Local: http://localhost:3001
    On Your Network: http://172.16.17.4:3001
    ```


Learn how to add the KVM control to your new React app [here](https://open-amt-cloud-toolkit.github.io/docs/1.0/Tutorials/uitoolkit/#add-a-sample-control)


For detailed documentation about the UI Toolkit, see the [docs](https://open-amt-cloud-toolkit.github.io/docs/)


## License Note

If you are distributing the FortAwesome Icons, please provide attribution to the source per the [CC-by 4.0](https://creativecommons.org/licenses/by/4.0/deed.ast) license obligations.
