package it.myalert.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.myalert.DTO.CitizenDTO;
import it.myalert.DTO.UserDTO;
import it.myalert.entities.Citizen;
import it.myalert.entities.User;
import it.myalert.exeption.CitizenExeption;
import it.myalert.exeption.UserExeption;
import it.myalert.services.CitizenService;
import it.myalert.services.UserService;

@RestController
@RequestMapping("/citizen")
public class CitizenRestController {
	
	@Autowired
	CitizenService citizenService;
	@Autowired
	UserService userService;

	@PostMapping(value="/addCitizen", consumes=MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public CitizenDTO post(@RequestBody CitizenDTO citizenDTO) throws CitizenExeption {
		Citizen citizen = citizenService.addCitizen(citizenService.convertToEntity(citizenDTO));
		return citizenService.convertToDTO(citizen);
	}
	
	@GetMapping(value="/getCitizenById/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public CitizenDTO getCitizenById(@PathVariable int id) throws CitizenExeption{
		
		Citizen citizen = citizenService.getCitizenById(id);
		CitizenDTO citizenDTO = citizenService.convertToDTO(citizen);
		return citizenDTO;
		
	}
	
	
	@PutMapping(value="/updatePosition/{idCitizen}", produces = MediaType.APPLICATION_JSON_VALUE)
	public CitizenDTO updatePosition(@PathVariable("idCitizen") int idCitizen, @RequestParam("lat") Double lat, @RequestParam("lon") Double lon) throws CitizenExeption {
		System.out.print("parameter:" + idCitizen + lat + lon);
		Citizen citizen = citizenService.updatePosition(lat, lon, idCitizen);
		return citizenService.convertToDTO(citizen);
	}
	
	
	@PutMapping(value="/updateCitizen/{idUser}", consumes=MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public UserDTO updateUser(@RequestBody UserDTO userDTO,  @PathVariable("idUser") int idUser) throws UserExeption {
		System.out.print("parameter:" + userDTO.toString());
		User user = userService.updateUser(userService.convertToEntity(userDTO), idUser);
		return userService.convertToDTO(user);
	}

}
