package it.myalert.servimplement;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import it.myalert.converter.InterventionConverter;
import it.myalert.entities.Intervention;
import it.myalert.exeption.InterventionExeption;
import it.myalert.DAO.InterventionDAO;
import it.myalert.services.InterventionService;

@Service
@Transactional(rollbackOn = InterventionExeption.class)
public class InterventionServImplement extends InterventionConverter implements InterventionService{

	@Autowired
	private InterventionDAO interventionDAO;
	
	@Override
	public List<Intervention> getAll() {
		return this.interventionDAO.findAll();
	}

	@Override
	public Intervention getById(int idIntervention) throws InterventionExeption {
		return this.interventionDAO.findById(idIntervention).orElseThrow(()-> new InterventionExeption("ERROR: No intervention found with id:"+ idIntervention));
	}

	@Override
	public Intervention addIntervention(Intervention intervention) throws InterventionExeption {
		intervention.setIdIntervention(null);
		return this.interventionDAO.save(intervention);
	}

	@Override
	public List<Intervention> getAllInterventionByStatusAndType(int idType, String status) throws InterventionExeption {
		return interventionDAO.findByStatusAndType_idType(status, idType);
	}
	
	@Override
	public Intervention updateIntervention(Intervention intervention) throws InterventionExeption {
		
		return this.interventionDAO.save(intervention);
	}

	@Override
	public List<Intervention> getByStatusOrderByStartdate(String status) throws InterventionExeption {
		return this.interventionDAO.findByStatusOrderByStartDate(status);
	}

	@Override
	public Boolean deleteIntervention(int idIntervention) throws InterventionExeption {
		
		Intervention intervention = this.interventionDAO.findById(idIntervention).orElseThrow(()-> new InterventionExeption("ERROR: No intervention found with id:"+ idIntervention));
		if(intervention != null) {
			this.interventionDAO.delete(intervention);
			return true;
		}
		return false;
	}




}
