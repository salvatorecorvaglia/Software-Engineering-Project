package it.myalert.restcontroller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;

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

import it.myalert.DTO.ManagerDTO;
import it.myalert.DTO.TypeDTO;
import it.myalert.DTO.UserDTO;
import it.myalert.entities.Manager;
import it.myalert.entities.Type;
import it.myalert.entities.User;
import net.bytebuddy.asm.Advice.This;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class TypeRestControllerTest {

	@Autowired
	private WebApplicationContext context;
	
	@Mock
	private TypeRestController mockService;
	
	@Autowired
	private ObjectMapper objectMapper;
	
	private MockMvc mockMvc;
	private TypeDTO typeDTO;
	
	@BeforeEach
	public void setUpEnv() {
		
		typeDTO = new TypeDTO();
		
		UserDTO userDTO = new UserDTO();
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
		
		managerDTO.setIdManager(1);
		managerDTO.setUser(userDTO);
		
		typeDTO.setIdType(1);
		typeDTO.setName("Test");
		typeDTO.setManagerDTO(managerDTO);
		
		
		this.mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
	}

	@Test
	public void getTypeById() throws Exception {


		this.mockMvc.perform(get("/type/getTypeById/1")
				.contentType(MediaType.APPLICATION_JSON_VALUE))
				.andExpect(status().isOk());
	}

	@Test
	@Transactional
	public void updateType() throws Exception {

		this.mockMvc.perform(put("/type/updateType/3")
				.param("idManager", "1")
				.param("name", "Update")
				.contentType(MediaType.APPLICATION_JSON_VALUE))
				.andExpect(status().isOk());
	}
	
	@Test
	public void getAllType() {
		try {
			this.mockMvc.perform(get("/type/getAllType").contentType("application/json")).andExpect(status().isOk());
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@Test
	@Transactional
	public void deleteType() throws Exception {

	    this.mockMvc.perform(delete("/type/deleteType/3")
	    		.contentType(MediaType.APPLICATION_JSON_VALUE))
	      		.andExpect(status().isOk());
	}

	
}
