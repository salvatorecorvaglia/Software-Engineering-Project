package it.myalert.servimplement;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.myalert.converter.CitizenConverter;
import it.myalert.entities.Citizen;
import it.myalert.exeption.CitizenExeption;
import it.myalert.DAO.CitizenDAO;
import it.myalert.DAO.UserDAO;
import it.myalert.services.CitizenService;

@Service
@Transactional(rollbackOn = CitizenExeption.class)
public class CitizenServImplement extends CitizenConverter implements CitizenService{

	@Autowired
	private CitizenDAO citizenDAO;
	@Autowired
	private UserDAO userDAO;
	
	@Override
	public List<Citizen> getAll() {
		return this.citizenDAO.findAll();
	}

	@Override
	public Citizen getCitizenById(int idCitizen) throws CitizenExeption {
		return this.citizenDAO.findById(idCitizen).orElseThrow(()-> new CitizenExeption("ERROR: No citizen found with id:"+ idCitizen));
	}

	@Override
	public Citizen addCitizen(Citizen citizen) throws CitizenExeption {
		citizen.getUser().setIdUser(null);
		citizen.setIdCitizen(null);
		return this.citizenDAO.save(citizen);
	}

	@Override
	public Citizen updatePosition(Double lat, Double lon, int idCitizen) throws CitizenExeption {
		Citizen updatedCitizen = this.citizenDAO.findById(idCitizen).orElseThrow(()-> new CitizenExeption("ERROR: No citizen found with id:"+ idCitizen));
		updatedCitizen.setLat(lat);
		updatedCitizen.setLon(lon);
		return this.citizenDAO.save(updatedCitizen);
	}

	@Override
	public Citizen updateCitizen(Citizen citizen) throws CitizenExeption {
		citizen.setUser(this.userDAO.save(citizen.getUser()));
		return this.citizenDAO.save(citizen);
	}

}
