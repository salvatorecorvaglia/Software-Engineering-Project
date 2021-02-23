package it.myalert.firebase;

import java.io.IOException;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;


@Service
public class FCMInizializer {

    @Value("${app.firebase-configuration-file}")
    private String firebaseConfigPath;

    Logger logger = LoggerFactory.getLogger(FCMInizializer.class);

    @PostConstruct
    public void initialize() {
        try {
        	FirebaseOptions options = FirebaseOptions.builder()
        		    .setCredentials(GoogleCredentials.fromStream(new ClassPathResource(firebaseConfigPath).getInputStream()))
        		    .setDatabaseUrl("https://myalertlecce-default-rtdb.europe-west1.firebasedatabase.app")
        		    .build();
            if (FirebaseApp.getApps().isEmpty()) {
                FirebaseApp.initializeApp(options);
        		System.out.println("Successfully started firebase");
            }
            else {
            }
        } catch (IOException e) {
            logger.error(e.getMessage());
        }
    }

}