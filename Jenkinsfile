
pipeline {
    agent any
    stages {
      stage('Build and run tests') {
            steps {
                echo 'clone test app'
                sh 'cd app && rm -rf protractor && ./download-demo-app.sh'
                
                echo 'start docker compose'
                sh 'export ENV=dockercompose'
                sh 'docker-compose -p project1 up -d --build'
                
                echo 'run e2e tests'
                sh 'docker-compose -p project1 exec prt npm run protractor-docker'
            }
      }
      stage('Stop') {
          steps {
              echo 'Stop docker compose'
              sh 'docker-compose -p project1 down'
          }
      }
    }
}
