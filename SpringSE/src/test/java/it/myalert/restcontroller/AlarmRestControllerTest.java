package it.myalert.restcontroller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
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

import it.myalert.DTO.AlarmDTO;
import it.myalert.DTO.AssignDTO;
import it.myalert.DTO.CitizenDTO;
import it.myalert.DTO.InterventionDTO;
import it.myalert.DTO.ManagerDTO;
import it.myalert.DTO.TypeDTO;
import it.myalert.DTO.UserDTO;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class AlarmRestControllerTest {

	@Autowired
	private WebApplicationContext context;
	
	@Mock
	private AlarmRestController mockService;
	
	@Autowired
	private ObjectMapper objectMapper;
	
	private MockMvc mockMvc;
	private AlarmDTO alarmDTO;
	
	@BeforeEach
	void setUpEnv() {
		
		alarmDTO = new AlarmDTO();

		CitizenDTO citizenDTO = new CitizenDTO();

		UserDTO userDTO = new UserDTO();

		InterventionDTO interventionDTO = new InterventionDTO();

		TypeDTO typeDTO = new TypeDTO();

		ManagerDTO managerDTO = new ManagerDTO();

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
		
		managerDTO.setIdManager(1);
		managerDTO.setUser(userDTO);
		
		
		typeDTO.setIdType(1);
		typeDTO.setName("Type");
		typeDTO.setManagerDTO(managerDTO);
		
		interventionDTO.setType(typeDTO);
		interventionDTO.setIdIntervention(1);
		interventionDTO.setLat(20.0);
		interventionDTO.setLon(20.0);
		interventionDTO.setAddress("Test");
		interventionDTO.setStatus("closed");
		
		citizenDTO.setIdCitizen(1);
		citizenDTO.setUserDTO(userDTO);
		
		Date date = new Date();
		alarmDTO.setIntervention(interventionDTO);
		alarmDTO.setAlarmDate(new Date());
		alarmDTO.setCitizen(citizenDTO);
		alarmDTO.setIdAlarm(1);
		
		this.mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
	}
	
	@Test
	public void getAllAlarmByIdIntervention() throws Exception {

	    this.mockMvc.perform(get("/alarm/getAllAlarmByIdIntervention/1")
	    		.contentType(MediaType.APPLICATION_JSON_VALUE))
	      		.andExpect(status().isOk());
	}

	@Test
	@Transactional
	public void addAlarm() throws Exception {

	    this.mockMvc.perform(MockMvcRequestBuilders.post("/alarm/addAlarm")
	    		.param("idType", "2")
	    		.param("idCitizen", "4")
	    		.content(objectMapper.writeValueAsString(alarmDTO))
	    		.contentType(MediaType.APPLICATION_JSON_VALUE))
	      		.andExpect(status().isOk());
	}
	
	
	@Test
	@Transactional
	public void deleteAlarm() throws Exception {

	    this.mockMvc.perform(delete("/alarm/deleteAlarm/1")
	    		.contentType(MediaType.APPLICATION_JSON_VALUE))
	      		.andExpect(status().isOk());
	}

	@Test
	public void getAll() {

		try {
			this.mockMvc.perform(get("/alarm/getAllAlarm").contentType("application/json")).andExpect(status().isOk());
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Test
	public void getAlarmById() throws Exception {

		this.mockMvc.perform(get("/alarm/getAlarmById/1")
				.contentType(MediaType.APPLICATION_JSON_VALUE))
				.andExpect(status().isOk());
	}
}
