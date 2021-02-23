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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import it.myalert.entities.Intervention;
import it.myalert.entities.Manager;
import it.myalert.entities.Type;
import it.myalert.entities.User;
import it.myalert.exeption.InterventionExeption;
import it.myalert.servimplement.InterventionServImplement;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class InterventionServiceUnitTest {
	
	@Autowired
	private InterventionServImplement interventionServImplement;
	
	@Mock
	private InterventionServImplement interventionServiceImplMock;
	
	private Intervention intervention;
	
	@BeforeEach
	void setUpEnv() {
		
		intervention = new Intervention();

		User user = new User();

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

		manager.setIdManager(1);
		manager.setUser(user);

		type.setIdType(1);
		type.setName("Type");
		type.setManager(manager);

		intervention.setType(type);
		intervention.setIdIntervention(1);
		intervention.setLat(30.0);
		intervention.setLon(30.0);
		intervention.setAddress("Address");
		intervention.setStatus("signaled");
	}

	@Test
	void updateIntervention() throws InterventionExeption {

		double lat_old = intervention.getLat();
		double lon_old = intervention.getLon();

		double lat_new = 20;
		double lon_new = 20;

		intervention.setLat(lat_new);
		intervention.setLon(lon_new);


		when(this.interventionServiceImplMock.updateIntervention(intervention)).thenReturn(intervention);
		assertThat(intervention.getLon()).isNotEqualTo(lon_old);
	}

	@Test
	void getByStatusOrderByStartdate() throws InterventionExeption {

		List<Intervention> list = new ArrayList<>();
		list = this.interventionServImplement.getByStatusOrderByStartdate("closed");
		Iterator<Intervention> listIT = list.iterator();
		while(listIT.hasNext()) {
			assertThat(listIT.next().getStatus()).isEqualTo("closed");
		}

	}
	
	@Test
	void getAll() {
		assertThat(this.interventionServImplement.getAll()).isNotNull();
	}
	
	@Test
	void getById() throws InterventionExeption {
		
		Exception exc = assertThrows(InterventionExeption.class, () -> this.interventionServImplement.getById(100));
        assertTrue(exc.getMessage().contains("ERROR: No intervention found with id:"+ 100));
		assertThat(this.interventionServImplement.getById(1)).isNotNull();
	}
	
	@Test
	void addIntervention() throws InterventionExeption {
		
		when(this.interventionServiceImplMock.addIntervention(intervention)).thenReturn(intervention);
		int id = this.interventionServiceImplMock.addIntervention(intervention).getIdIntervention();
		assertThat(id).isEqualTo(1);
	}
	
	@Test
	void getAllInterventionByStatusAndType() throws InterventionExeption {
		
		List<Intervention> list = new ArrayList<>();
		list = this.interventionServImplement.getAllInterventionByStatusAndType(intervention.getType().getIdType(), intervention.getStatus());
		Iterator<Intervention> listIT = list.iterator();
		while(listIT.hasNext()) {
			assertThat(listIT.next().getType().getIdType()).isEqualTo(intervention.getType().getIdType());
		}
		
	}

	@Test
	void deleteIntervention() throws InterventionExeption {
		Exception exc = assertThrows(InterventionExeption.class, () -> {
            this.interventionServImplement.deleteIntervention(100);
            verify(this.interventionServiceImplMock).deleteIntervention(100);
        });
        assertTrue(exc.getMessage().contains("ERROR: No intervention found with id:"+ 100));
	}


	

}
