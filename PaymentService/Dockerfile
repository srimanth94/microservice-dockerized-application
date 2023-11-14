FROM openjdk:17
ADD target/payment-microservice-k8s.jar payment-microservice-k8s.jar
ENTRYPOINT ["java", "-jar", "/payment-microservice-k8s.jar"]
EXPOSE 2222