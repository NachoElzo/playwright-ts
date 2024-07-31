pipeline {
    agent any
    //Install ansi color pluggin in jenkins 
    //Works for improve jenkins console output style
    options {
        ansiColor("xterm")
    }
    environment {
        // Creates html report variable
        HTML_REPORT = '--reporter=html'
    }

    // Creates parameters to run with parameters
    parameters {
        choice(
            name: "ENVIRONMENT",
            choices: ["ui", "api"],
            description: "Project or browser to execute, usually for dev or stage"
        )
        choice(
            name: "SPECS",
            choices: ["frontend", "backend"],
            description: "Add your test path or test name here, empty field for all test"
        )
        choice(
            name: "BROWSER",
            choices: ["chromium", "firefox", "webkit"],
            description: "Project or browser to execute"
        )
        string(
            name: "REPORTER",
            defaultValue: '--reporter=html',
            description: "you can edit and change the reporter"
        )
    }
    stages {
        stage('Build') {
            // Creates node image
            // Reuse node to be used in another steps
            agent {
                docker {
                    image 'node:21-alpine'
                    reuseNode true
                }
            }
            steps {
                // Validate node version
                sh '''
                    ls -la
                    node --version
                    npm --version
                    npm ci
                    echo your building process was a success
                '''
            }
        }

        stage('Unit && E2E tests') {
            // With parallel we execute multiple steps in parallel
            parallel {
                stage('Unit tests') {
                    steps {
                        sh "echo Starting unit tests"
                    }
                    post {
                        success {
                            echo 'Your unit test passed successfully'
                        }
                    }
                }

                stage('E2E') {
                    agent {
                        docker {
                            image 'mcr.microsoft.com/playwright:v1.39.0-jammy'
                            reuseNode true
                        }
                    }
                    steps {
                        sh "npx playwright install"
                        sh "ENVIRONMENT=${params.ENVIRONMENT} npx playwright test ${params.SPECS}/specs --project ${params.BROWSER} ${params.REPORTER}"
                    }
                    // Script generated in pipeline syntax section to publish Playwright report
                    // Remember to unlock Jenkins privacy policy to open external files in Jenkins options - script console
                    post {
                        always {
                            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'playwright-report', reportFiles: 'index.html', reportName: 'Playwright HTML Report', reportTitles: '', useWrapperFileDirectly: true])
                        }
                    }
                }
            }
        }

        stage('Deploy process') {
            steps {
                sh '''
                    echo your application is in deploy process
                '''
            }
            post {
                success {
                    echo 'Your app is running in prod'
                }
            }
        }
    }
}
