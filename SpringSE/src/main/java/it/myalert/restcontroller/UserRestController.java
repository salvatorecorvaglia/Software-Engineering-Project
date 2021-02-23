package it.myalert.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.myalert.DTO.UserDTO;
import it.myalert.entities.User;
import it.myalert.exeption.AgentExeption;
import it.myalert.exeption.CitizenExeption;
import it.myalert.exeption.ManagerExeption;
import it.myalert.exeption.UserExeption;
import it.myalert.services.UserService;

@RestController
@RequestMapping("/user")
public class UserRestController {
	
	@Autowired
	UserService userService;
	
	@GetMapping(value="/getByEmail/", produces=MediaType.APPLICATION_JSON_VALUE)
	public Object getUserByEmail(@RequestParam("email") String email) throws UserExeption, AgentExeption, ManagerExeption, CitizenExeption{
		System.out.print("parameter:" + email);
		return this.userService.convertToDTOcustom(this.userService.getUserByEmail(email));
	}
	
	@GetMapping(value="/getUserById/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public UserDTO getUserById(@PathVariable int id) throws UserExeption {
		
		User user = userService.getUserById(id);
		UserDTO userDTO = userService.convertToDTO(user);
		return userDTO;
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	

}
