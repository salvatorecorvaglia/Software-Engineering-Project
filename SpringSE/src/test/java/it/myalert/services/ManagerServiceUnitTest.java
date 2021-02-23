package it.myalert.services;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.sql.Timestamp;
import java.util.Date;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import it.myalert.entities.Manager;
import it.myalert.entities.User;
import it.myalert.exeption.ManagerExeption;
import it.myalert.servimplement.ManagerServImplement;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class ManagerServiceUnitTest {
	
	@Autowired
	private ManagerServImplement managerServImplement;
	
	@Mock
	private ManagerServImplement managerServiceImplMock;
	
	private Manager manager;
	private User user;
	
	@BeforeEach
	void setUpEnv() {
		
		manager = new Manager();
		manager.setUser(user);
		manager.setIdManager(1);

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

	}

	@Test
	void getManagerById() throws ManagerExeption {
		
		Exception exc = assertThrows(ManagerExeption.class, () -> this.managerServImplement.getById(100));
        assertTrue(exc.getMessage().contains("ERROR: No user found"));
		assertThat(this.managerServImplement.getById(1)).isNotNull();
	}
	
}
