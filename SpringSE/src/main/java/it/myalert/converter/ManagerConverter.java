package it.myalert.converter;

import org.springframework.beans.factory.annotation.Autowired;

import it.myalert.DTO.ManagerDTO;
import it.myalert.entities.Manager;

public class ManagerConverter implements Converter<ManagerDTO, Manager> {

	@Autowired
	UserConverter userConverter;
	
	@Override
	public ManagerDTO convertToDTO(Manager manager) {
		
		ManagerDTO managerDTO = new ManagerDTO();
		managerDTO.setIdManager(manager.getIdManager());
		if(manager.getUser() != null) {			
			managerDTO.setUser(userConverter.convertToDTO(manager.getUser()));
		}
	
		return managerDTO;
	}

	@Override
	public Manager convertToEntity(ManagerDTO managerDTO) {

		Manager manager = new Manager();
		manager.setIdManager(managerDTO.getIdManager());
		manager.setUser(userConverter.convertToEntity(managerDTO.getUser()));
		
		return manager;
	}

}
