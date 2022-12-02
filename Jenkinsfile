pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent1_1"
                    }
                    steps {
                        git url: 'https://github.com/Eduwan/Paralelo_pipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 84f74513-fee3-45a3-97dd-a00b1c2aefb8  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent1_2"
                    }
                    steps {
                        git url: 'https://github.com/Eduwan/Paralelo_pipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 84f74513-fee3-45a3-97dd-a00b1c2aefb8  --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agent1_3"
                    }
                    steps {
                        git url: 'https://github.com/Eduwan/Paralelo_pipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 84f74513-fee3-45a3-97dd-a00b1c2aefb8  --parallel'
                    
                    }
                }

                stage('Slave 4') {
                    agent {
                        label "Agent1_4"
                    }
                    steps {
                        git url: 'https://github.com/Eduwan/Paralelo_pipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 84f74513-fee3-45a3-97dd-a00b1c2aefb8  --parallel'
                    
                    }
                }

                // stage('Slave 5') {
                //     agent {
                //         label "Agent1_5"
                //     }
                //     steps {
                //         git url: 'https://github.com/Eduwan/Paralelo_pipline.git'
                //         bat 'npm install'
                //         bat 'npm update'                       
                //         bat 'npx cypress run --record --key 84f74513-fee3-45a3-97dd-a00b1c2aefb8  --parallel'
                    
                //     }
                // }

                
   
                  
            }

             
        }

    }
            
}