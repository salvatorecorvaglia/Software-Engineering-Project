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

import it.myalert.entities.User;
import it.myalert.exeption.UserExeption;
import it.myalert.servimplement.UserServImplement;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class UserServiceUnitTest {

	@Autowired
	private UserServImplement userServImplement;
	
	@Mock
	private UserServImplement userServiceImplMock;
	
	private User user;
	
	@BeforeEach
	void setUpEnv() {
		
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
	void getUserByEmail() throws UserExeption {

		User userGet = this.userServImplement.getUserByEmail(user.getEmail());
		String email = this.userServImplement.getUserByEmail(user.getEmail()).getEmail();
		assertThat(email).isEqualTo("s.corvagliabooking@gmail.com");
	}
	
	@Test
	void getAllTest() {
		assertThat(userServImplement.getAll()).isNotNull();
	}
	
	@Test
	void saveUser() {
		
		when(this.userServiceImplMock.addUser(user)).thenReturn(user);
		System.out.print("id user -> " + user.toString());
		int id = this.userServiceImplMock.addUser(user).getIdUser();
		assertThat(id).isEqualTo(4);
	}
	
	@Test
	void getUserById() throws UserExeption {
		
		Exception exc = assertThrows(UserExeption.class, () -> this.userServImplement.getUserById(100));
        assertTrue(exc.getMessage().contains("ERROR: No user found with id:"+ 100));
        assertThat(this.userServImplement.getUserById(3)).isNotNull();

	}
	
	
	
}
