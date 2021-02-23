package it.myalert.servimplement;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.myalert.converter.AgentConverter;
import it.myalert.entities.Agent;
import it.myalert.entities.User;
import it.myalert.exeption.AgentExeption;
import it.myalert.DAO.AgentDAO;
import it.myalert.DAO.ManagerDAO;
import it.myalert.DAO.UserDAO;
import it.myalert.services.AgentService;

@Service
@Transactional(rollbackOn = AgentExeption.class)
public class AgentServImplement extends AgentConverter implements AgentService {

	@Autowired
	private AgentDAO agentDAO;
	@Autowired
	private ManagerDAO managerDAO;
	@Autowired
	private UserDAO userDAO;
	
	
	@Override
	public List<Agent> getAll() {
		
		return this.agentDAO.findAll();
	}

	@Override
	public Agent addAgent(Agent agent, int idManager) throws AgentExeption {
		User user = agent.getUser();
		user.setIdUser(null);
		agent.setIdAgent(null);
		return this.agentDAO.save(agent);
		
	}

	@Override
	public Agent getAgentById(int idAgent) throws AgentExeption {

		return this.agentDAO.findById(idAgent).orElseThrow(()-> new AgentExeption("ERROR: No agent found with id:"+ idAgent));
	}

	@Override
	public Agent updatePosition(Double lat, Double lon, int idAgent) throws AgentExeption {
		Agent updatedAgent = this.agentDAO.findById(idAgent).orElseThrow(()-> new AgentExeption("ERROR: No agent found with id:"+ idAgent));
		updatedAgent.setLat(lat);
		updatedAgent.setLon(lon);
		return this.agentDAO.save(updatedAgent);
	}

	@Override
	public Agent updateAgent(Agent agent, int idAgent) throws AgentExeption {
		Agent agent2 = this.agentDAO.findById(idAgent).orElseThrow(()-> new AgentExeption("ERROR: No agent found with id:"+ idAgent));

		agent.setUser(this.userDAO.save(agent.getUser()));
		agent.setManager(agent2.getManager());
		return this.agentDAO.save(agent);
	}

	
	

}
