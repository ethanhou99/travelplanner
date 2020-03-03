# Travel Planner
##Backend Introduction
###how to run backend code
####important !!!
make sure you 8080 port is not in use
#####1. cd into backend folder
`$ cd ../YourProjectRoot/travelplanner/backend/`
#####2. if you are the first time, please install maven packages.
`$ mvn package`

#####3. run application
`$ ./mvnw spring-boot:run`

if you see error
`Could not find or load main class org.apache.maven.wrapper.MavenWrapperMain`
please run following command, then rerun command above.
 
    
        mvn -N io.takari:maven:wrapper
    
    
