package it.myalert.services;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.verify;
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

import it.myalert.entities.Manager;
import it.myalert.entities.Type;
import it.myalert.entities.User;
import it.myalert.exeption.ManagerExeption;
import it.myalert.exeption.TypeExeption;
import it.myalert.servimplement.TypeServImplement;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class TypeServiceUnitTest {
	
	@Autowired
	private TypeServImplement typeServImplement;
	
	@Mock
	private TypeServImplement typeServiceImplMock;
	
	private Type type;
	private Manager manager;
	
	@BeforeEach
	void setUpEnv() throws ManagerExeption {

		type = new Type();

		User user = new User();
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

		type.setIdType(3);
		type.setName("Test");
		type.setManager(manager);
	}
	
	@Test
	void getAllTest() {
		
		assertThat(this.typeServImplement.getAll()).isNotNull();
	}


	@Test
	void getTypeById() throws TypeExeption {
		
		Exception exc = assertThrows(TypeExeption.class, () -> this.typeServImplement.getTypeById(100));
        assertTrue(exc.getMessage().contains("ERROR: No type found with id:"+ 100));
		assertThat(this.typeServImplement.getTypeById(type.getIdType())).isNotNull();

	}
	
	@Test
	void deleteType() throws TypeExeption {
		
		Exception exc = assertThrows(TypeExeption.class, () -> {
            this.typeServImplement.deleteType(100);
            verify(this.typeServiceImplMock).deleteType(100);
        });
        assertTrue(exc.getMessage().contains("ERROR: No type found with id:"+ 100));

	}

	@Test
	void addType() throws ManagerExeption {

		when(this.typeServiceImplMock.addType(type)).thenReturn(type);
		assertThat(type.getIdType()).isNotNull();
	}

	@Test
	void updateType() throws TypeExeption {

		type.setName("New Type Test");
		when(this.typeServiceImplMock.updateType(type)).thenReturn(type);
		assertThat(type.getName()).isNotEqualTo("Test");
	}

}
