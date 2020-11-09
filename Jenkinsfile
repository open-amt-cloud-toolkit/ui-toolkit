def notify = [
    email: false,
    slack: [ success: '#mps-ui-toolkit-build', failure: '#mps-ui-toolkit-build' ]
]

def projectKey = 'mps-ui-toolkit'

node {
    try {
        stage('Cloning Repository') {
            scmCheckout {
                clean = true
            }
        }

        // if we are on the master branch run static code scans
        // if(env.GIT_BRANCH =~ /.*master/) {
            stage('Static Code Scan') {
                staticCodeScan {
                    // generic
                    scanners             = ['checkmarx', 'protex', 'snyk']
                    scannerType          = 'javascript'

                    protexProjectName    = 'IoTG RBHE Open AMT UI Toolkit - 3Q 2020'
                    // internal, do not change
                    protexBuildName      = 'rrs-generic-protex-build'

                    checkmarxProjectName = "RSD-Danger-Bay-MPS-UI-ToolKit"

                    //snyk details
                    snykUrl                 = 'https://snyk.devtools.intel.com/api'
                    snykManifestFile        = ['package-lock.json']
                    snykProjectName         = ['danger-bay-ui_toolkit']
                    snykScanApiToken        = 'snyk_apitoken_sys_rsdcodescan'
                }
            }
        // }

        stage('Tests') {
            docker.image('node:latest').inside {
                sh 'npm install'
                sh 'npm run test'
            }
        }

        stage('Build') {
            docker.image('node:latest').inside {
                sh 'npm install'
                sh 'npm build'
            }
        }

        if(notify.email) {
            def buildResult = currentBuild.result ?: 'SUCCESS'
            mail to: notify.email.to, subject: "[${buildResult}] 🙌 ✅ - ${env.JOB_NAME} - Build # ${env.BUILD_NUMBER} 🙌 ✅", body: "${env.BUILD_URL}"
        }

        if(notify.slack) {
            slackBuildNotify {
                slackSuccessChannel = notify.slack.success
            }
        }
    } catch (ex) {
        currentBuild.result = 'FAILURE'

        if(notify.email) {
            mail to: notify.email.to, subject: "[${currentBuild.result}] 💩 😵 - ${env.JOB_NAME} - Build # ${env.BUILD_NUMBER} 👻 😭", body: "${env.BUILD_URL}"
        }

        if(notify.slack) {
            slackBuildNotify {
                failed = true
                slackFailureChannel = notify.slack.failure
                messages = [
                    [ title: 'An Error Occured', text: "The build failed due to: ${ex.getMessage()}" ]
                ]
            }
        }

        throw ex
    }
}
