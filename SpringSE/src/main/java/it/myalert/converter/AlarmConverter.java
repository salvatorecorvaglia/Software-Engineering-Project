package it.myalert.converter;


import java.sql.Timestamp;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;

import it.myalert.DTO.AlarmDTO;
import it.myalert.entities.Alarm;

public class AlarmConverter implements Converter<AlarmDTO, Alarm> {

	@Autowired
	private CitizenConverter citizenConverter;
	@Autowired
	private InterventionConverter interventionConverter;
	
	@Override
	public AlarmDTO convertToDTO(Alarm alarm) {

		AlarmDTO alarmDTO = new AlarmDTO();
		alarmDTO.setIdAlarm(alarm.getIdAlarm());
		alarmDTO.setCitizen(citizenConverter.convertToDTO(alarm.getCitizen()));
		alarmDTO.setIntervention(interventionConverter.convertToDTO(alarm.getIntervention()));
		alarmDTO.setAlarmDate(new Date(alarm.getAlarmDate().getTime()));
		alarmDTO.setTitle(alarm.getTitle());
		alarmDTO.setDescription(alarm.getDescription());
		return alarmDTO;
	}

	@Override
	public Alarm convertToEntity(AlarmDTO alarmDTO) {

		Alarm alarm = new Alarm();
		alarm.setIdAlarm(alarmDTO.getIdAlarm());
		alarm.setCitizen(citizenConverter.convertToEntity(alarmDTO.getCitizen()));
		alarm.setIntervention(interventionConverter.convertToEntity(alarmDTO.getIntervention()));
		alarm.setAlarmDate(new Timestamp(alarmDTO.getAlarmDate().getTime()));
		alarm.setTitle(alarmDTO.getTitle());
		alarm.setDescription(alarmDTO.getDescription());
		return alarm;
	}

}
