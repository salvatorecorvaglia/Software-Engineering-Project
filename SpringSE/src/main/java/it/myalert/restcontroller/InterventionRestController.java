package it.myalert.restcontroller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.myalert.DTO.InterventionDTO;
import it.myalert.entities.Intervention;
import it.myalert.exeption.InterventionExeption;
import it.myalert.exeption.TypeExeption;
import it.myalert.services.AlarmService;
import it.myalert.services.CitizenService;
import it.myalert.services.InterventionService;
import it.myalert.services.TypeService;

@RestController
@RequestMapping("/intervention")
public class InterventionRestController {
	
	@Autowired
	private InterventionService interventionService;
	@Autowired
	private TypeService typeService;
	@Autowired
	private CitizenService citizenService;
	@Autowired
	private AlarmService alarmService;
	
	
	@GetMapping(value="/getInterventionById/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public InterventionDTO getInterventionById(@PathVariable("id") int id) throws InterventionExeption{
		
		Intervention intervention = interventionService.getById(id);
		return interventionService.convertToDTO(intervention);
		
	}
	
	private double distance(Double lat1_s, Double lon1_s, Double lat2_s, Double lon2_s) {
		

		if ((lat1_s.compareTo(lat2_s) == 0) && (lon1_s.compareTo(lon2_s)== 0)) {
			return 0;
		}
		else {
			double theta = lon1_s - lon2_s;
			double dist = Math.sin(Math.toRadians(lat1_s)) * Math.sin(Math.toRadians(lat2_s)) + Math.cos(Math.toRadians(lat1_s)) * Math.cos(Math.toRadians(lat2_s)) * Math.cos(Math.toRadians(theta));
			dist = Math.acos(dist);
			dist = Math.toDegrees(dist);
			dist = dist * 60 * 1.1515;
			return (dist);
		}
	}
	
	@GetMapping(value="/getInterventionByStatus/{status}", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<InterventionDTO> getByStatusOrderByStartdate(@PathVariable("status") String status) throws InterventionExeption{
		
		Iterator<Intervention> intervention = interventionService.getByStatusOrderByStartdate(status).iterator();
		List<InterventionDTO> listDTO = new ArrayList<InterventionDTO>();
		
		while(intervention.hasNext()) {
			
			listDTO.add(interventionService.convertToDTO(intervention.next()));
		}
		
		if(listDTO.isEmpty()) {
			return Collections.emptyList();
		}
		
		return listDTO;
		
	}
			
	@PutMapping(value="/updateIntervention/{idIntervention}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public InterventionDTO updateIntervention(@PathVariable("idIntervention") int idIntervention, @RequestBody InterventionDTO interventionDTO, @RequestParam("idType")int idType) throws InterventionExeption, TypeExeption {	
		
		
		interventionDTO.setIdIntervention(idIntervention);
		interventionDTO.setType(typeService.convertToDTO(typeService.getTypeById(idType)));
		Intervention intervention = interventionService.convertToEntity(interventionDTO);
		
		return interventionService.convertToDTO(interventionService.updateIntervention(intervention));
	}

}
