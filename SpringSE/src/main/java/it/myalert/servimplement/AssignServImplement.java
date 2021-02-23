package it.myalert.servimplement;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.myalert.converter.AssignConverter;
import it.myalert.entities.Assign;
import it.myalert.exeption.AgentExeption;
import it.myalert.exeption.AssignExeption;
import it.myalert.exeption.InterventionExeption;
import it.myalert.DAO.AssignDAO;
import it.myalert.services.AssignService;

@Service
@Transactional(rollbackOn = AssignExeption.class)
public class AssignServImplement extends AssignConverter implements AssignService{

	@Autowired
	private AssignDAO assignDAO;
	@Override
	public List<Assign> getAll() {
		
		return this.assignDAO.findAll();
	}

	@Override
	public Assign getAssignById(int idAssign) throws AssignExeption {
		
		return this.assignDAO.findById(idAssign).orElseThrow(()-> new AssignExeption("ERROR: No assign found with id:"+ idAssign));
	}

	@Override
	public List<Assign> getAssignByIdAgent(int idAgent) throws AgentExeption {
		
		return this.assignDAO.findByAgent_idAgent(idAgent);
	}
	
	@Override
	public List<Assign> getAssignByIdIntervention(int idIntervention) throws InterventionExeption {
		
		return this.assignDAO.findByIntervention_idIntervention(idIntervention);
	}

	@Override
	public Assign assignAgentToIntervention(Assign assign) {
		assign.setIdAssign(null);
		return this.assignDAO.save(assign);
	}

	@Override
	public Assign updateAssign(Assign assign) throws AssignExeption {
		return this.assignDAO.save(assign);
	}

	@Override
	public List<Assign> getAllAssignAndOrderByFieldName(int idAgent, String fieldName)throws AgentExeption, AssignExeption {
		List<Assign> list = this.assignDAO.findByAgent_idAgentOrderByStartValidateDesc(idAgent);
		return list;
	}

	

}
