# PASO 01 COMPILAR
FROM maven:3.6.3-jdk-11-slim AS builder
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -Dmaven.test.skip=true
#  al terminar /app/application*.jar
RUN ls /app
# PASO 02 CREAR LA IMAGEN
FROM openjdk:11.0.6-jdk
LABEL maintainer="rodnal@mitocode.com"
WORKDIR /workspace
RUN ls /workspace
# COPY application.jar /workspace/app.jar
COPY --from=builder /app/target/application*.jar app.jar
ENTRYPOINT exec java -jar /workspace/app.jar
