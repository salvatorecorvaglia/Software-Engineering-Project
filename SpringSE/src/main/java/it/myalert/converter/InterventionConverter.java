package it.myalert.converter;

import java.sql.Timestamp;

import org.springframework.beans.factory.annotation.Autowired;

import it.myalert.DTO.InterventionDTO;
import it.myalert.entities.Intervention;

public class InterventionConverter implements Converter<InterventionDTO, Intervention>{

	@Autowired
	private TypeConverter typeConverter;
	
	@Override
	public InterventionDTO convertToDTO(Intervention intervention) {

		InterventionDTO interventionDTO = new InterventionDTO();
		interventionDTO.setIdIntervention(intervention.getIdIntervention());
		interventionDTO.setType(typeConverter.convertToDTO(intervention.getType()));
		interventionDTO.setLat(intervention.getLat());
		interventionDTO.setLon(intervention.getLon());
		interventionDTO.setAddress(intervention.getAddress());
		interventionDTO.setStartDate(intervention.getStartDate());
		interventionDTO.setEndDate(intervention.getEndDate());
		interventionDTO.setFirstReport(intervention.getFirstReport());
		interventionDTO.setLastReport(intervention.getLastReport());
		interventionDTO.setStatus(intervention.getStatus());
		interventionDTO.setCount(intervention.getCount());
		return interventionDTO;
	}

	@Override
	public Intervention convertToEntity(InterventionDTO interventionDTO) {

		Intervention intervention = new Intervention();
		intervention.setIdIntervention(interventionDTO.getIdIntervention());
		intervention.setType(typeConverter.convertToEntity(interventionDTO.getType()));
		intervention.setLat(interventionDTO.getLat());
		intervention.setLon(interventionDTO.getLon());
		intervention.setAddress(interventionDTO.getAddress());
		if(interventionDTO.getStartDate() != null) {
			intervention.setStartDate(new Timestamp(interventionDTO.getStartDate().getTime()));
		}
		if(interventionDTO.getEndDate() != null) {
			intervention.setEndDate(new Timestamp(interventionDTO.getEndDate().getTime()));
		}
		intervention.setFirstReport(interventionDTO.getFirstReport());
		intervention.setLastReport(interventionDTO.getLastReport());
		intervention.setStatus(interventionDTO.getStatus());
		intervention.setCount(interventionDTO.getCount());
		return intervention;
	}

}
