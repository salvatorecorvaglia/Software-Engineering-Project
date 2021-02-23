package it.myalert.services;

import java.util.List;

import it.myalert.DTO.ManagerDTO;
import it.myalert.converter.Converter;
import it.myalert.entities.Manager;
import it.myalert.exeption.ManagerExeption;

public interface ManagerService extends Converter<ManagerDTO, Manager>{
	
	public List<Manager> getAll();
	public Manager getById(int id) throws ManagerExeption;

}
