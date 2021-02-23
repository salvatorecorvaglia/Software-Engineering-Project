package it.myalert.servimplement;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.myalert.converter.ManagerConverter;
import it.myalert.entities.Manager;
import it.myalert.exeption.ManagerExeption;
import it.myalert.DAO.ManagerDAO;
import it.myalert.services.ManagerService;

@Service
@Transactional
public class ManagerServImplement extends ManagerConverter implements ManagerService {

	@Autowired
	private ManagerDAO managerDAO;

	
	@Override
	public List<Manager> getAll() {
		return this.managerDAO.findAll();
	}


	@Override
	public Manager getById(int id)  throws ManagerExeption {
		return managerDAO.findById(id).orElseThrow(()-> new ManagerExeption("ERROR: No user found"));
	}


}
