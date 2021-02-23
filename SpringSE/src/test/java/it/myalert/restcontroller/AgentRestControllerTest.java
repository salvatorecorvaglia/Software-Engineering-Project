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
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import com.fasterxml.jackson.databind.ObjectMapper;
import it.myalert.DTO.AgentDTO;
import it.myalert.DTO.ManagerDTO;
import it.myalert.DTO.UserDTO;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class AgentRestControllerTest {
	
	@Autowired
	private WebApplicationContext context;
	
	@Mock
	private AgentRestController mockService;
	
	@Autowired
	private ObjectMapper objectMapper;
	
	private MockMvc mockMvc;
	private AgentDTO agentDTO;

	@BeforeEach
	void setUpEnv() {

		agentDTO = new AgentDTO();
		UserDTO userDTO = new UserDTO();

		UserDTO userManagerDTO = new UserDTO();

		ManagerDTO managerDTO = new ManagerDTO();

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
		userManagerDTO.setBirthDate(new Date());
		userManagerDTO.setSex("M");
		userManagerDTO.setAddress("Test");
		userManagerDTO.setCity("Test");
		userManagerDTO.setState("Italy");
		
		managerDTO.setIdManager(1);
		managerDTO.setUser(userManagerDTO);

		agentDTO.setUserDTO(userDTO);
		agentDTO.setIdAgent(1);
		agentDTO.setLat(20.0);
		agentDTO.setLon(20.0);
		agentDTO.setHireDate(new Date());
		
		this.mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
		
	}

	@Test
	@Transactional
	public void updatePosition() throws Exception {

		this.mockMvc.perform(put("/agent/updatePosition/3")
				.param("lat", "20.0")
				.param("lon", "20.0")
				.contentType(MediaType.APPLICATION_JSON_VALUE))
				.andExpect(status().isOk());
	}
	
	@Test
	public void getAgentById() throws Exception {

	    this.mockMvc.perform(get("/agent/getAgent/1")
	    		.contentType(MediaType.APPLICATION_JSON_VALUE))
	      		.andExpect(status().isOk());
	}
	
	@Test
	public void getAgentByPosition() throws Exception {

	    this.mockMvc.perform(get("/agent/getAgentByPosition")
	    		.param("lat", "20.0")
	    		.param("lon", "20.0")
	    		.param("distance", "10")
	    		.contentType(MediaType.APPLICATION_JSON_VALUE))
	      		.andExpect(status().isOk());
	}

	@Test
	public void getAllAgent() {

		try {
			this.mockMvc.perform(get("/agent/getAllAgent").contentType("application/json")).andExpect(status().isOk());
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
