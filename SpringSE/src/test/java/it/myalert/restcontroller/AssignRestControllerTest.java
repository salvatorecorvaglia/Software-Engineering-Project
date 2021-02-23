package it.myalert.restcontroller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.sql.Timestamp;
import java.util.Date;

import javax.transaction.Transactional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.fasterxml.jackson.databind.ObjectMapper;

import it.myalert.DTO.AgentDTO;
import it.myalert.DTO.AssignDTO;
import it.myalert.DTO.InterventionDTO;
import it.myalert.DTO.ManagerDTO;
import it.myalert.DTO.TypeDTO;
import it.myalert.DTO.UserDTO;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class AssignRestControllerTest {
	
	@Autowired
	private WebApplicationContext context;
	
	@Mock
	private AssignRestController mockService;
	
	@Autowired
	private ObjectMapper objectMapper;
	
	private MockMvc mockMvc;
	private AssignDTO assignDTO;
	
	@BeforeEach
	void setUpEnv() {
		
		assignDTO = new AssignDTO();
		ManagerDTO managerDTO = new ManagerDTO();
		AgentDTO agentDTO = new AgentDTO();
		UserDTO userDTO = new UserDTO();
		UserDTO userManagerDTO = new UserDTO();
		InterventionDTO interventionDTO = new InterventionDTO();
		TypeDTO typeDTO = new TypeDTO();


		userDTO = new UserDTO();
		userDTO.setIdUser(4);
		userDTO.setName("Salvatore");
		userDTO.setSurname("Corvaglia");
		userDTO.setEmail("s.corvagliabooking@gmail.com");
		userDTO.setBirthDate(new Timestamp(new Date().getTime()));
		userDTO.setSex("M");
		userDTO.setAddress("Via Pasquale Ferraro, 60");
		userDTO.setCity("Diso");
		userDTO.setState("Italy");
		
		userManagerDTO.setIdUser(1);
		userManagerDTO.setName("Luca");
		userManagerDTO.setSurname("Mainetti");
		userManagerDTO.setEmail("manager@myalert.com");
		userManagerDTO.setBirthDate(new Timestamp(new Date().getTime()));
		userManagerDTO.setSex("M");
		userManagerDTO.setAddress("Test");
		userManagerDTO.setCity("Test");
		userManagerDTO.setState("Italy");
		
		managerDTO.setUser(userManagerDTO);
		managerDTO.setIdManager(1);
		
		agentDTO.setUserDTO(userDTO);
		agentDTO.setIdAgent(1);
		agentDTO.setHireDate(new Date());
		agentDTO.setManagerDTO(managerDTO);
		
		typeDTO.setIdType(1);
		typeDTO.setName("Type");
		typeDTO.setManagerDTO(managerDTO);
		
		interventionDTO.setType(typeDTO);
		interventionDTO.setIdIntervention(1);
		interventionDTO.setLat(20.0);
		interventionDTO.setLon(20.0);
		interventionDTO.setAddress("Test");
		interventionDTO.setStatus("signaled");
		
		assignDTO.setAgent(agentDTO);
		assignDTO.setManager(managerDTO);
		assignDTO.setIntervention(interventionDTO);
		assignDTO.setIdAssign(1);
		assignDTO.setConfirm(false);
		assignDTO.setConcluded(false);
		
		this.mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
		
	}
	
	@Test
	public void getAllAssignByIdAgent() throws Exception {

	    this.mockMvc.perform(get("/assign/getAllAssignByIdAgent/10")
	    		.contentType(MediaType.APPLICATION_JSON_VALUE))
	      		.andExpect(status().isOk());
	}
	
	@Test
	@Transactional
	public void updateAssign() throws Exception {

	    this.mockMvc.perform(put("/assign/updateAssign/1")
	    		.content(objectMapper.writeValueAsString(assignDTO))
	    		.contentType(MediaType.APPLICATION_JSON_VALUE))
	      		.andExpect(status().isOk());
	}

	@Test
	public void getAssignById() throws Exception {

		this.mockMvc.perform(get("/assign/getAssignById/3")
				.contentType(MediaType.APPLICATION_JSON_VALUE))
				.andExpect(status().isOk());
	}

	@Test
	public void getAssignByIdIntervention() throws Exception {

		this.mockMvc.perform(get("/assign/getAssignByIdIntervention/4")
				.contentType(MediaType.APPLICATION_JSON_VALUE))
				.andExpect(status().isOk());
	}

}
