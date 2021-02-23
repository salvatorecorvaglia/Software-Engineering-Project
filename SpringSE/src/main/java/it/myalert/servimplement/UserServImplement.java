package it.myalert.servimplement;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.myalert.converter.AgentConverter;
import it.myalert.converter.CitizenConverter;
import it.myalert.converter.ManagerConverter;
import it.myalert.converter.UserConverter;
import it.myalert.entities.Agent;
import it.myalert.entities.Citizen;
import it.myalert.entities.Manager;
import it.myalert.entities.User;
import it.myalert.exeption.AgentExeption;
import it.myalert.exeption.CitizenExeption;
import it.myalert.exeption.ManagerExeption;
import it.myalert.exeption.UserExeption;
import it.myalert.DAO.AgentDAO;
import it.myalert.DAO.CitizenDAO;
import it.myalert.DAO.ManagerDAO;
import it.myalert.DAO.UserDAO;
import it.myalert.services.UserService;

@Service
@Transactional
public class UserServImplement extends UserConverter implements UserService  {
	
	
	@Autowired
	private UserDAO userDAO;
	@Autowired
	private AgentDAO agentDAO;
	@Autowired
	private ManagerDAO managerDAO;
	@Autowired
	private CitizenDAO citizenDAO;
	@Autowired
	private AgentConverter agentConverter;
	@Autowired
	private ManagerConverter managerConverter;
	@Autowired
	private CitizenConverter citizenConverter;

	
	@Override
	public List<User> getAll() {
		List<User> users = this.userDAO.findAll();
		return users;
	}


	@Override
	public User addUser(User user) {
		user.setIdUser(null);
		return this.userDAO.save(user);
	}


	@Override
	public User getUserByEmail(String email) throws UserExeption {
			
		try {
			return this.userDAO.findByEmail(email);
		}catch (Exception e) {
			throw new UserExeption("ERROR: No user found with email: "+ email);
		}
	}

	public Object convertToDTOcustom(User user) throws UserExeption, AgentExeption, ManagerExeption,CitizenExeption {
		if(user.getAgent() != null && user.getAgent().size() > 0) {
			Agent agent = (Agent)user.getAgent().toArray()[0];
			Agent agent2 = this.agentDAO.findById(agent.getIdAgent()).orElseThrow(()-> new AgentExeption("ERROR: No agent found with id: "+ agent.getIdAgent()));
			return this.agentConverter.convertToDTO(agent2);
		} else if(user.getManager() != null && user.getManager().size() > 0) {
			Manager manager = (Manager)user.getManager().toArray()[0];
			Manager manager2 = this.managerDAO.findById(manager.getIdManager()).orElseThrow(()-> new ManagerExeption("ERROR: No manager found with id: "+ manager.getIdManager()));
			return this.managerConverter.convertToDTO(manager2);
		} else if(user.getCitizen() != null && user.getCitizen().size() > 0) {
			Citizen citizen = (Citizen)user.getCitizen().toArray()[0];
			Citizen citizen2 = this.citizenDAO.findById(citizen.getIdCitizen()).orElseThrow(()-> new CitizenExeption("ERROR: No manager found with id: "+ citizen.getIdCitizen()));
			return this.citizenConverter.convertToDTO(citizen2);
		}
		throw new UserExeption("ERROR: no user found!!");
	}
	
	@Override
	public User getUserById(int idUser) throws UserExeption {
		return this.userDAO.findById(idUser).orElseThrow(()-> new UserExeption("ERROR: No user found with id:"+ idUser));
	}
	
	@Override
	public User updateUser(User user, int idUser) throws UserExeption {
		User updatedUser = this.userDAO.findById(idUser).orElseThrow(()-> new UserExeption("ERROR: No user found with id:"+ idUser));
		updatedUser.setName(user.getName());
		updatedUser.setSurname(user.getSurname());
		updatedUser.setEmail(user.getEmail());
		updatedUser.setBirthDate(user.getBirthDate());
		updatedUser.setSex(user.getSex());
		updatedUser.setAddress(user.getAddress());
		updatedUser.setCity(user.getCity());
		updatedUser.setState(user.getState());
		updatedUser.setToken(user.getToken());
		return this.userDAO.save(updatedUser);
	}
	

}

