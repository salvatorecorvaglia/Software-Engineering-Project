package it.myalert.firebase;

import java.util.List;

import org.springframework.stereotype.Service;

import com.google.firebase.messaging.BatchResponse;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.MulticastMessage;
import com.google.firebase.messaging.Notification;


@Service
public class FCMService {

	
	public void SendToOne(String token, String title, String body) throws FirebaseMessagingException {

		Message message = Message.builder().setNotification(Notification.builder()
				        .setTitle(title)
				        .setBody(body)
				        .build()).setToken(token).build();


		String response = FirebaseMessaging.getInstance().send(message);
		System.out.println("Successfully sent message: " + response);
		
	}
	
	
	public void SendToMany(List<String> tokens, String title, String body) throws FirebaseMessagingException {
		

		MulticastMessage message = MulticastMessage.builder().setNotification(Notification.builder()
				        .setTitle(title)
				        .setBody(body)
				        .build()).addAllTokens(tokens).build();

		BatchResponse response = FirebaseMessaging.getInstance().sendMulticast(message);
		System.out.println("Successfully sent message: " + response);
		
	}
	  



}