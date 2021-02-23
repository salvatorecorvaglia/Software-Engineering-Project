package it.myalert.services;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
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

import it.myalert.entities.Agent;
import it.myalert.entities.Assign;
import it.myalert.entities.Intervention;
import it.myalert.entities.Manager;
import it.myalert.entities.Type;
import it.myalert.entities.User;
import it.myalert.exeption.AgentExeption;
import it.myalert.exeption.AssignExeption;
import it.myalert.servimplement.AssignServImplement;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class AssignServiceUnitTest {

	@Autowired
	private AssignServImplement assignServImplement;
	
	@Mock
	private AssignServImplement assignServiceImplMock;
	
	private Assign assign;
	
	@BeforeEach
	void setUpEnv() {
		
		assign = new Assign();

		Manager manager = new Manager();

		Agent agent = new Agent();

		User user = new User();
		User userManager = new User();

		Intervention intervention = new Intervention();

		Type type = new Type();

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

		userManager.setIdUser(5);
		userManager.setName("Luca");
		userManager.setSurname("Mainetti");
		userManager.setEmail("manager@myalert.com");
		userManager.setBirthDate(new Timestamp(new Date().getTime()));
		userManager.setSex("M");
		userManager.setAddress("Test");
		userManager.setCity("Test");
		userManager.setState("Italy");

		manager.setUser(userManager);
		manager.setIdManager(1);

		agent.setUser(user);
		agent.setIdAgent(1);
		agent.setManager(manager);

		type.setIdType(1);
		type.setName("type");
		type.setManager(manager);

		intervention.setType(type);
		intervention.setIdIntervention(1);
		intervention.setLat(10.0);
		intervention.setLon(10.0);
		intervention.setAddress("Address");
		intervention.setStatus("assigned");

		assign.setAgent(agent);
		assign.setManager(manager);
		assign.setIntervention(intervention);
		assign.setIdAssign(1);
		assign.setConfirm(false);
		assign.setConcluded(false);
	}
	
	@Test
	void getAll() {
		assertThat(this.assignServImplement.getAll()).isNotNull();
	}
	
	@Test
	void assignAgentToIntervention() {
		
		when(this.assignServiceImplMock.assignAgentToIntervention(assign)).thenReturn(assign);
		int id = this.assignServiceImplMock.assignAgentToIntervention(assign).getIdAssign();
		assertThat(id).isEqualTo(1);
	}
	
	@Test
	void updateAssign() throws AssignExeption {
		
		assign.setConfirm(true);
		when(this.assignServiceImplMock.updateAssign(assign)).thenReturn(assign);
		assertThat(assign.getConfirm()).isNotEqualTo(false);
	}

	@Test
	void getAllAssignAndOrderByFieldName() throws AgentExeption, AssignExeption {
		
		List<Assign> list = new ArrayList<>();
		list = this.assignServImplement.getAllAssignAndOrderByFieldName(assign.getAgent().getIdAgent(), "endValidate");
		Iterator<Assign> listIT = list.iterator();
		while(listIT.hasNext()) {
			assertThat(listIT.next().getAgent().getIdAgent()).isEqualTo(assign.getAgent().getIdAgent());
		}
	}

	@Test
	void getAssignById() throws AssignExeption {
		Exception exc = assertThrows(AssignExeption.class, () -> this.assignServImplement.getAssignById(100));
		assertTrue(exc.getMessage().contains("ERROR: No assign found with id:"+ 100));
		assertThat(this.assignServImplement.getAssignById(1)).isNotNull();
	}

	@Test
	void getAssignByIdAgent() throws AgentExeption {

		List<Assign> list = new ArrayList<>();
		list = this.assignServImplement.getAssignByIdAgent(assign.getAgent().getIdAgent());
		Iterator<Assign> listIT = list.iterator();
		while(listIT.hasNext()) {
			assertThat(listIT.next().getAgent().getIdAgent()).isEqualTo(assign.getAgent().getIdAgent());
		}
	}
	
}
