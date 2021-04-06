<a name="v1.2.0"></a>
## v1.2.0

### Build
- **bundles:** Remove react dependency in mousehelper class
- **bundles:** add a new bundle file to export core classes ([#58](https://github.com/open-amt-cloud-toolkit/ui-toolkit/issues/58))
- **declaretypes:** provide type declarations for core components
- **dep:** bump lodash 4.17.20 to 4.17.21
- **deps:** bump [@fortawesome](https://github.com/fortawesome)/free-solid-svg-icons
- **deps-dev:** bump [@types](https://github.com/types)/react from 16.9.43 to 17.0.0
- **deps-dev:** bump webpack-cli from 3.3.12 to 4.5.0
- **deps-dev:** bump ts-jest from 26.5.0 to 26.5.4
- **deps-dev:** bump react from 16.13.1 to 17.0.1
- **deps-dev:** bump style-loader from 1.3.0 to 2.0.0
- **deps-dev:** bump css-loader from 5.1.0 to 5.1.3
- **deps-dev:** bump [@types](https://github.com/types)/react-dom from 17.0.0 to 17.0.2
- **deps-dev:** bump canvas from 2.6.1 to 2.7.0
- **deps-dev:** bump css-loader from 3.6.0 to 5.1.0
- **deps-dev:** bump [@types](https://github.com/types)/node from 11.15.44 to 14.14.37
- **deps-dev:** bump source-map-loader from 0.2.4 to 1.1.3
- **deps-dev:** bump [@typescript](https://github.com/typescript)-eslint/parser from 4.13.0 to 4.19.0
- **deps-dev:** bump [@types](https://github.com/types)/react-dom from 16.9.8 to 17.0.0
- **snyc:** Upgrade xterm from 4.8.1 to 4.9.0
- **webpack:** fix npm start command
- **webpack:** update webpack version

### Ci
- remove node 10, add node 15 to github actions
- add jenkinsfile for scanning

### Fix
- remove bash.exe.stackdump
- package.json & package-lock.json to reduce vulnerabilities
- **api:** rps rest api's are updated
- **core:** fix typo in exported file name
- **devicegrid:** continuous calls to mps
- **kvm:** kvm screens refresh between multiple tabs

### Refactor
- **lint:** remove eslint errors ([#45](https://github.com/open-amt-cloud-toolkit/ui-toolkit/issues/45))


<a name="v1.1.0"></a>
## [v1.1.0] - 2021-02-11
### Build
- **deps:** bump [@fortawesome](https://github.com/fortawesome)/fontawesome-svg-core
- **deps:** bump [@fortawesome](https://github.com/fortawesome)/react-fontawesome from 0.1.11 to 0.1.13
- **deps:** update jest to 26.6.3
- **deps-dev:** bump [@types](https://github.com/types)/enzyme from 3.10.5 to 3.10.8
- **deps-dev:** bump webpack-dev-server from 3.11.0 to 3.11.2

### Ci
- add types for conventional commits
- update to include coverage
- sync dependencies
- add simple build for ui-toolkit

### Docs
- add changelog
- add status badges
- add release disclaimer

### Feat
- add cors support
- hide MEBx password related fields for client control mode in profile control

### Fix
- upgrade ws from 7.2.0 to 7.3.1
- **ciraconfig:** root cert now uses mps server address
- **ciraconfig:** mps root cert autoload
- **ciraconfigform:** changed mpsServer prop mandatory
- **tests:** Fix timezone issue in timerenderer unit test
- **tests:** memory leak in tests

### Refactor
- **deps:** remove recompose

### Test
- Add more unit tests to have better code coverage
- uncomment unit tests

### Tests
- disable image related tests for coverage

