package edu.escuelaing.arep;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.KeyManagementException;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;

import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManagerFactory;

public class UrlReader {
	private static KeyStore trustStore = null;
	private static TrustManagerFactory tmf = null;
	private static SSLContext sslContext = null;
	public UrlReader() {
		super();
	}

	public static void iniciar() {
		File trustStoreFile = new File("keystores/myTrustStore");
		char[] trustStorePassword = "123456789".toCharArray();
		try {
			trustStore = KeyStore.getInstance(KeyStore.getDefaultType());
			trustStore.load(new FileInputStream(trustStoreFile), trustStorePassword);
			tmf = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm());
			tmf.init(trustStore);
			
			sslContext = SSLContext.getInstance("TLS");
			sslContext.init(null, tmf.getTrustManagers(), null);
			SSLContext.setDefault(sslContext);
			
			
		} catch (IOException | NoSuchAlgorithmException | CertificateException | KeyStoreException
				| KeyManagementException e) {
			e.printStackTrace();
		}

	}
	
	
	public static String getService() throws IOException {
		System.out.println("f");
        URL url = new URL("https://localhost:5002/service");
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");
        con.setDoOutput(true);

        try (BufferedReader br = new BufferedReader(new InputStreamReader(con.getInputStream(), "utf-8"))) {
            StringBuilder response = new StringBuilder();
            
            	String responseLine;
            while ((responseLine = br.readLine()) != null) {
                response.append(responseLine.trim());
            }
           
            return response.toString();

        }
    }
}
