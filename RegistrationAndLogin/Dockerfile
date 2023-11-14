FROM openjdk:17
ADD target/auth-microservice-k8s.jar auth-microservice-k8s.jar
ENTRYPOINT ["java", "-jar", "/auth-microservice-k8s.jar"]
EXPOSE 7979