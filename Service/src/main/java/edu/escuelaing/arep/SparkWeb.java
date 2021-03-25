package edu.escuelaing.arep;

import static spark.Spark.*;

/**
 * Spark Web que ofrece el servicio web
 */
public class SparkWeb{

    public static void main(String[] args) {
        port(getPort());
        secure("keystores/ecikeystore.p12","123456789","keystores/myTrustStore","123456789");
        get("/service",(request, response) -> "Service Response");

    }

    /**
     * retorna el puerto del ambiente, sino se encuentra retorna el puerto 5001
     * @return un entero especificando el puerto
     */
    static int getPort() {
        if (System.getenv("PORT") != null) {
            return Integer.parseInt(System.getenv("PORT"));
        }
        return 5001;
    }
    
}

