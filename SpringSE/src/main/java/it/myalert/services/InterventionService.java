package it.myalert.services;

import java.util.List;

import it.myalert.DTO.InterventionDTO;
import it.myalert.converter.Converter;
import it.myalert.entities.Intervention;
import it.myalert.exeption.InterventionExeption;

public interface InterventionService extends Converter<InterventionDTO, Intervention> {
	
	public List<Intervention> getAll();
	public Intervention getById(int idIntervention) throws InterventionExeption;
	public Intervention addIntervention(Intervention intervention) throws InterventionExeption;
	public List<Intervention> getAllInterventionByStatusAndType(int idType, String status) throws InterventionExeption;
	public Intervention updateIntervention(Intervention intervention) throws InterventionExeption;
	public List<Intervention> getByStatusOrderByStartdate(String status) throws InterventionExeption;
	public Boolean deleteIntervention(int idIntervention) throws InterventionExeption;

}
