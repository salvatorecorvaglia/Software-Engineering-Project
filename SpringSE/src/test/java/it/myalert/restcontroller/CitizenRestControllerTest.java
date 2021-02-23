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

import it.myalert.DTO.CitizenDTO;
import it.myalert.DTO.UserDTO;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class CitizenRestControllerTest {

	@Autowired
	private WebApplicationContext context;
	
	@Mock
	private CitizenRestController mockService;
	
	@Autowired
	private ObjectMapper objectMapper;
	
	private MockMvc mockMvc;
	private CitizenDTO citizenDTO;
	private UserDTO userDTO;
	
	@BeforeEach
	void setUpEnv() {
		
		citizenDTO = new CitizenDTO();

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
		
		citizenDTO.setUserDTO(userDTO);
		citizenDTO.setIdCitizen(1);
		citizenDTO.setLat(20.0);
		citizenDTO.setLon(20.0);
		
		this.mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
		
	}
	
	@Test
	@Transactional
	public void updatePosition() throws Exception {

	    this.mockMvc.perform(put("/citizen/updatePosition/5")
	    		.param("lat", "20.0")
	    		.param("lon", "20.0")
	    		.contentType(MediaType.APPLICATION_JSON_VALUE))
	      		.andExpect(status().isOk());
	}

	@Test
	public void getCitizenById() throws Exception {

		this.mockMvc.perform(get("/citizen/getCitizenById/5")
				.contentType(MediaType.APPLICATION_JSON_VALUE))
				.andExpect(status().isOk());
	}
	
}
