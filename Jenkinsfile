agent any
environment {
    REPO_URL = 'https://github.com/cnu/helloworld-app.git'
}
stages {
    stage('Build') {
        steps {
            echo 'Pull code and build'
            git url: "${REPO_URL}"
            sh 'npm install'
            sh 'npm run build'
        }
    }

    stage('Test') {
        steps {
            echo 'Run tests and publish results'
            sh 'npm run test'
        }
    }

    stage('Deploy to Development') {
        steps {
            echo 'Deploy package to Dev'
            sh "serverless deploy --alias DEV "
        }
    }
}
post {
    always {
        publishHTML target: [
        allowMissing         : true,
        alwaysLinkToLastBuild: false,
        keepAll              : true,
        reportDir            : 'coverage',
        reportFiles          : 'index.html',
        reportName           : 'Test Report'
        ]
    }
}
