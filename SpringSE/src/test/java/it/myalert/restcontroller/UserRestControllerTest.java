package it.myalert.restcontroller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.sql.Timestamp;
import java.util.Date;

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

import it.myalert.DTO.UserDTO;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class UserRestControllerTest {
		
	@Autowired
	private WebApplicationContext context;
	
	@Mock
	private UserRestController mockService;

	private MockMvc mockMvc;
	private UserDTO userDTO;
	
	@BeforeEach
	public void setUpEnv() {
		
		this.userDTO = new UserDTO();
		this.userDTO.setName("Salvatore");
		this.userDTO.setSurname("Corvaglia");
		this.userDTO.setEmail("s.corvagliabooking@gmail.com");
		this.userDTO.setBirthDate(new Timestamp(new Date().getTime()));
		this.userDTO.setSex("M");
		this.userDTO.setAddress("Via Pasquale Ferraro, 60");
		this.userDTO.setCity("Diso");
		this.userDTO.setState("Italy");
		
		this.mockMvc = MockMvcBuilders
				.webAppContextSetup(context)
				.build();
		
	}

	@Test
	public void getByEmail() throws Exception {


		this.mockMvc.perform(get("/user/getByEmail/")
				.param("email", "manager@myalert.com")
				.contentType(MediaType.APPLICATION_JSON_VALUE))
				.andExpect(status().isOk());
	}

	@Test
	public void getUserById() throws Exception {

	    
	    this.mockMvc.perform(get("/user/getUserById/4")
	    		.contentType(MediaType.APPLICATION_JSON_VALUE))
	      		.andExpect(status().isOk());
	}

}
