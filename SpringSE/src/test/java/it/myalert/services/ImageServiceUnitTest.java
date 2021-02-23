package it.myalert.services;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.omg.CORBA.UserException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import it.myalert.entities.Image;
import it.myalert.entities.Intervention;
import it.myalert.entities.Manager;
import it.myalert.entities.Type;
import it.myalert.entities.User;
import it.myalert.exeption.CitizenExeption;
import it.myalert.exeption.ImageExeption;
import it.myalert.exeption.InterventionExeption;
import it.myalert.exeption.UserExeption;
import it.myalert.servimplement.ImageServImplement;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class ImageServiceUnitTest {
	
	@Autowired
	private ImageServImplement imageServImplement;
	
	@Mock
	private ImageServImplement imageServiceImplMock;
	
	private Image image;
	
	@BeforeEach
	void setUpEnv() {
		
		image = new Image();

		User user = new User();
		User userManager = new User();

		Intervention intervention = new Intervention();

		Type type = new Type();
		Manager manager = new Manager();

		user = new User();
		user.setIdUser(4);
		user.setName("Salvatore");
		user.setSurname("Corvaglia");
		user.setEmail("s.corvagliabooking@gmail.com");
		user.setBirthDate(new Timestamp(new Date().getTime()));
		user.setSex("M");
		user.setAddress("Via Pasquale Ferraro, 60");
		user.setCity("Diso");
		user.setState("Italy");

		userManager.setIdUser(1);
		userManager.setName("Luca");
		userManager.setSurname("Mainetti");
		userManager.setEmail("manager@myalert.com");
		userManager.setBirthDate(new Timestamp(new Date().getTime()));
		userManager.setSex("M");
		userManager.setAddress("Test");
		userManager.setCity("Test");
		userManager.setState("Italy");

		manager.setIdManager(1);
		manager.setUser(userManager);

		type.setIdType(1);
		type.setName("type");
		type.setManager(manager);

		intervention.setType(type);
		intervention.setIdIntervention(1);
		intervention.setLat(10.0);
		intervention.setLon(10.0);
		intervention.setAddress("Test");
		intervention.setStatus("assigned");
		
		image.setIdImage(1);
		image.setIntervention(intervention);
		image.setUser(user);
		image.setUrl("https:\\www.myalert.com");
	}
		
		@Test
		void addImage() throws UserExeption {
			
			when(this.imageServiceImplMock.addImage(image)).thenReturn(image);
			int id = this.imageServiceImplMock.addImage(image).getIdImage();
			assertThat(id).isEqualTo(1);
		}

		@Test
		void deleteImage() throws ImageExeption {
			Exception exc = assertThrows(ImageExeption.class, () -> {
	            this.imageServImplement.deleteImage(100);
	            verify(this.imageServiceImplMock).deleteImage(100);
	        });
	        assertTrue(exc.getMessage().contains("ERROR: No image found with id:"+ 100));
		}
		
		@Test
		void deleteImageByIdCitizen() throws CitizenExeption {
			
			boolean status = true; 
			when(this.imageServiceImplMock.deleteImageByIdCitizen(image.getUser().getIdUser())).thenReturn(true);
	
			assertThat(status).isEqualTo(true);
		}

	@Test
	void getAll() {
		assertThat(this.imageServImplement.getAll()).isNotNull();
	}

	@Test
	void getAllImageByIdIntervention() throws InterventionExeption {
		List<Image> list = new ArrayList<>();
		list = this.imageServImplement.getAllImageByIdIntervention(image.getIntervention().getIdIntervention());
		Iterator<Image> listIT = list.iterator();
		while(listIT.hasNext()) {
			assertThat(listIT.next().getIntervention().getIdIntervention()).isEqualTo(image.getIntervention().getIdIntervention());
		}
	}

	@Test
	void findByIntervention_idInterventionAndUser_idUser() throws InterventionExeption,UserException {

		List<Image> list = new ArrayList<>();
		list = this.imageServImplement.findByIntervention_idInterventionAndUser_idUser(image.getIntervention().getIdIntervention(), image.getUser().getIdUser());
		Iterator<Image> listIT = list.iterator();
		while(listIT.hasNext()) {
			assertThat(listIT.next().getIntervention().getIdIntervention()).isEqualTo(image.getIntervention().getIdIntervention());
		}
	}

}
