package it.myalert.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.myalert.DTO.ManagerDTO;
import it.myalert.entities.Manager;
import it.myalert.exeption.ManagerExeption;
import it.myalert.services.ManagerService;

@RestController
@RequestMapping("/manager")
public class ManagerRestController {
	
	@Autowired
	ManagerService managerService;
	
	@GetMapping(value="/getManagerById/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ManagerDTO getManagerById(@PathVariable int id) throws ManagerExeption{
		
		Manager manager = managerService.getById(id);
		ManagerDTO managerDTO = managerService.convertToDTO(manager);
		return managerDTO;
		
	}
}
