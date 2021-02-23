package it.myalert.services;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import java.sql.Timestamp;
import java.util.Date;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import it.myalert.entities.Citizen;
import it.myalert.entities.User;
import it.myalert.exeption.CitizenExeption;
import it.myalert.servimplement.CitizenServImplement;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class CitizenServiceUnitTest {

	@Autowired
	private CitizenServImplement citizenServImplement;
	
	@Mock
	private CitizenServImplement citizenServiceImplMock;
	
	private Citizen citizen;
	private User user;
	
	@BeforeEach
	void setUpEnv() {
		
		citizen = new Citizen();

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

		citizen.setUser(user);
		citizen.setIdCitizen(1);
		citizen.setLat(40.0);
		citizen.setLon(18.0);
		
	}

	@Test
	void addCitizen() throws CitizenExeption {

		when(this.citizenServiceImplMock.addCitizen(citizen)).thenReturn(citizen);
		int id = this.citizenServiceImplMock.addCitizen(citizen).getIdCitizen();
		assertThat(id).isEqualTo(1);
	}

	@Test
	void updateCitizen() throws CitizenExeption {

		citizen.getUser().setAddress("Via Brindisi, 10");
		when(this.citizenServiceImplMock.updateCitizen(citizen)).thenReturn(citizen);
		assertThat(citizen.getUser().getAddress()).isNotEqualTo("Test");
	}
	
	@Test
	void getAllTest() {
		assertThat(this.citizenServImplement.getAll()).isNotNull();
	}

	@Test
	void getCitizenById() throws CitizenExeption {
		
		Exception exc = assertThrows(CitizenExeption.class, () -> this.citizenServImplement.getCitizenById(100));
        assertTrue(exc.getMessage().contains("ERROR: No citizen found with id:"+ 100));
        assertThat(this.citizenServImplement.getCitizenById(6)).isNotNull();
	}
	
	@Test
	void updatePosition() throws CitizenExeption {
		double lat_new = 20;
		double lon_new = 30;
		
		double lat_old = citizen.getLat();
		double lon_old = citizen.getLon();
		
		when(this.citizenServiceImplMock.updatePosition(lat_new, lon_new, citizen.getIdCitizen())).thenReturn(citizen);
		assertThat(citizen.getLon()).isNotEqualTo(lon_new);
		
	}
}
