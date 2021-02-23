package it.myalert.servimplement;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.myalert.converter.AlarmConverter;
import it.myalert.entities.Alarm;
import it.myalert.entities.Image;
import it.myalert.exeption.AgentExeption;
import it.myalert.exeption.AlarmExeption;
import it.myalert.exeption.CitizenExeption;
import it.myalert.exeption.ImageExeption;
import it.myalert.exeption.InterventionExeption;
import it.myalert.DAO.AlarmDAO;
import it.myalert.services.AlarmService;
import it.myalert.services.CitizenService;

@Service
@Transactional(rollbackOn = AlarmExeption.class)
public class AlarmServImplement extends AlarmConverter implements AlarmService {

	@Autowired
	private AlarmDAO alarmDAO;
	@Autowired
	private CitizenService citizenService;
	
	@Override
	public List<Alarm> getAll() {
		
		return alarmDAO.findAll();
	}

	@Override
	public Alarm getAlarmById(int idAlarm) throws AlarmExeption {
		
		return this.alarmDAO.findById(idAlarm).orElseThrow(()-> new AlarmExeption("ERROR: No alarm found with id:"+ idAlarm));
	}

	@Override
	public Alarm addAlarm(Alarm alarm) throws AlarmExeption {
		alarm.setIdAlarm(null);
		return alarmDAO.save(alarm);
	}

	@Override
	public List<Alarm> getAllAlarmByIdIntervention(int idIntervention) throws InterventionExeption {
		return this.alarmDAO.findByIntervention_idIntervention(idIntervention);
	}
	
	@Override
	public List<Alarm> getAllAlarmByIdCitizen(int idCitizen) throws CitizenExeption {
		return this.alarmDAO.findByCitizen_idCitizen(idCitizen);
	}

	@Override
	public Boolean deleteAlarm(int idAlarm) throws AlarmExeption {
		
		Alarm alarm = this.alarmDAO.findById(idAlarm).orElseThrow(()-> new AlarmExeption("ERROR: No alarm found with id:"+ idAlarm));
		if(alarm != null) {
			this.alarmDAO.delete(alarm);
			return true;
		}
		return false;
	}

}
