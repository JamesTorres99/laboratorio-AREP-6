# *AREP - Laboratorio 6*
# APLICACIÓN DISTRIBUIDA SEGURA EN TODOS SUS FRENTES

## Integrantes:

- James Alexander Torres

## Use Maven, Circle CI, AWS, Docker, GIT and GITHUB.
Desarrolle una aplicación Web segura con los siguientes requerimientos:

Debe permitir un acceso seguro desde el browser a la aplicación. Es decir debe garantizar autenticación, autorización e integridad de usuarios.
Debe tener al menos dos computadores comunicacndose entre ellos y el acceso de servicios remotos debe garantizar: autenticación, autorización e integridad entre los servicios. Nadie puede invocar los servicios si no está autorizado.

## Despliegue 


**Compilar el proyecto con maven**
```
mvn package
```

**Ejecutar el proyecto con maven**
```
java -cp target/classes;target/dependency/* edu.escuelaing.arep.App

```

**Ejecutar pruebas del proyecto con maven**
```
mvn test
```

**Obtener Documentacion del proyecto con maven**

El ejecutable de javadoc "index.html" se encuentra en target\site\apidocs al ejecutar el siguiente comando:
```
mvn javadoc:javadoc
```

**Ejecutando el programa**

debe usar el comando desde el directorio raíz usando Docker ToolBox
```
docker-compose up -d --scale web=3
```