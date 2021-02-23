package it.myalert.restcontroller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.firebase.messaging.FirebaseMessagingException;

import it.myalert.DTO.AlarmDTO;
import it.myalert.DTO.InterventionDTO;
import it.myalert.DTO.ResponseBean;
import it.myalert.entities.Agent;
import it.myalert.entities.Alarm;
import it.myalert.entities.Intervention;
import it.myalert.exeption.AlarmExeption;
import it.myalert.exeption.CitizenExeption;
import it.myalert.exeption.InterventionExeption;
import it.myalert.exeption.TypeExeption;
import it.myalert.firebase.FCMService;
import it.myalert.services.AgentService;
import it.myalert.services.AlarmService;
import it.myalert.services.CitizenService;
import it.myalert.services.ImageService;
import it.myalert.services.InterventionService;
import it.myalert.services.TypeService;

@RestController
@RequestMapping("/alarm")
public class AlarmRestController {

	@Autowired
	private AlarmService alarmService;
	@Autowired
	private InterventionService interventionService;
	@Autowired
	private TypeService typeService;
	@Autowired
	private CitizenService citizenService;
	@Autowired
	private ImageService imageService;
	@Autowired
	private AgentService agentService;
	@Autowired
	private FCMService fcmService;
	
	
	@GetMapping(value="/getAllAlarm", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<AlarmDTO> getAll(){

		List<AlarmDTO> listDTO = new ArrayList<AlarmDTO>();
		Iterator<Alarm> alarmIT = alarmService.getAll().iterator();

		while(alarmIT.hasNext()) {

			listDTO.add(alarmService.convertToDTO(alarmIT.next()));
		}

		if(listDTO.isEmpty()) {
			return Collections.emptyList();
		}

		return listDTO;
	}
	
	@GetMapping(value="/getAlarmById/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public AlarmDTO getAlarmById(@PathVariable("id") int id) throws AlarmExeption{
		
		Alarm alarm = alarmService.getAlarmById(id);
		return alarmService.convertToDTO(alarm);
		
	}
	
	@GetMapping(value="/getAllAlarmByIdIntervention/{idIntervention}", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<AlarmDTO> getAllAlarmByIdIntervention(@PathVariable("idIntervention") int idIntervention) throws InterventionExeption{
		
		Iterator<Alarm> listIT = alarmService.getAllAlarmByIdIntervention(idIntervention).iterator();
		List<AlarmDTO> listDTO = new ArrayList<AlarmDTO>();
		
		while(listIT.hasNext()) {
			listDTO.add(alarmService.convertToDTO(listIT.next()));
		}
		return listDTO;
		
	}
	
	@GetMapping(value="/getAllAlarmByIdCitizen/{idCitizen}", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<AlarmDTO> getAllAlarmByIdCitizen(@PathVariable("idCitizen") int idCitizen) throws CitizenExeption{
		
		Iterator<Alarm> listIT = alarmService.getAllAlarmByIdCitizen(idCitizen).iterator();
		List<AlarmDTO> listDTO = new ArrayList<AlarmDTO>();
		
		while(listIT.hasNext()) {
			listDTO.add(alarmService.convertToDTO(listIT.next()));
		}
		return listDTO;
		
	}

	@PostMapping(value="/addAlarm", consumes=MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public AlarmDTO post(@RequestBody AlarmDTO alarmDTO, @RequestParam("idType") int idType, @RequestParam("idCitizen") int idCitizen) throws TypeExeption, InterventionExeption, CitizenExeption, AlarmExeption, FirebaseMessagingException {

		InterventionDTO interventionDTO = alarmDTO.getIntervention();
		Double limit = 0.05;
		interventionDTO.setType(typeService.convertToDTO(typeService.getTypeById(idType)));
		Intervention intervention = new Intervention();


		List<Intervention> list= interventionService.getAllInterventionByStatusAndType(idType, "signaled");
		if(list.size() == 0) {
			interventionDTO.setCount(1);
			intervention = interventionService.addIntervention(interventionService.convertToEntity(interventionDTO));
		}
		else {
			Iterator<Intervention> listInterventionIT = list.iterator();
			while(listInterventionIT.hasNext()) {
				Intervention InterventionIT = listInterventionIT.next();
				Double distance = this.distance(interventionDTO.getLat(), interventionDTO.getLon(), InterventionIT.getLat(), InterventionIT.getLon());
				Double distance2 = this.distance2(interventionDTO.getLat(), interventionDTO.getLon(), InterventionIT.getLat(), InterventionIT.getLon(), 'K');
				System.out.print("\ndistance2= "+distance2 + " km");
				if( distance2 > limit) {
					System.out.print("distace > 50 mt: "+ distance+ "for intervention with ID "+ InterventionIT.getIdIntervention());
					interventionDTO.setCount(1);
					intervention = interventionService.addIntervention(interventionService.convertToEntity(interventionDTO));
				}else {
					InterventionIT.setCount(InterventionIT.getCount()+1);
					intervention = this.interventionService.updateIntervention(InterventionIT);
				}

			}
		}
		alarmDTO.setCitizen(citizenService.convertToDTO(citizenService.getCitizenById(idCitizen)));
		alarmDTO.setIntervention(interventionService.convertToDTO(intervention));
		Alarm alarm = alarmService.addAlarm(alarmService.convertToEntity(alarmDTO));

		List<Agent> listagent = agentService.getAll();
		Iterator<Agent> listAgentIT = listagent.iterator();
		while(listAgentIT.hasNext()) {
			Agent AgentIT = listAgentIT.next();
			String token = AgentIT.getUser().getToken();
			String title;
			String body;
			if (token != null) {
				title = "MyAlert";
				body = "There is a new alarm!";
				this.fcmService.SendToOne(token, title, body);
			}
		}

		return alarmService.convertToDTO(alarm);
	}

	
	
	
	@DeleteMapping(value="/deleteAlarm/{idAlarm}")
	public ResponseBean deleteAlarm(@PathVariable("idAlarm") int idAlarm) throws AlarmExeption {	
		AlarmDTO alarmDTO = this.getAlarmById(idAlarm);
		
		Boolean canDeleteIntervention = true;
		if(alarmDTO.getIntervention().getCount() > 1) {
				canDeleteIntervention= false;
		}
			
		Boolean status= false;
		try {
		
			alarmDTO.getIntervention().setCount(alarmDTO.getIntervention().getCount()-1);
			
			this.interventionService.updateIntervention(this.interventionService.convertToEntity(alarmDTO.getIntervention()));
			status= this.alarmService.deleteAlarm(idAlarm);
			status = this.imageService.deleteImageByIdCitizen(alarmDTO.getCitizen().getUserDTO().getIdUser());
			if(canDeleteIntervention) {
				status = this.interventionService.deleteIntervention(alarmDTO.getIntervention().getIdIntervention());
			}
			return ResponseBean.okResponse(status);	
		}catch (Exception e) {
			return ResponseBean.koResponseBean(status, e.getMessage());
		}
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
	
	
	private double distance2(Double lat1, Double lon1, Double lat2, Double lon2, char unit) {
		
		if ((lat1.compareTo(lat2) == 0) && (lon1.compareTo(lon2)== 0)) {
			return 0;
		} else if(lat1 == null || lon1 == null) {
			return 1000000;
		} else{
			double theta = lon1 - lon2;
		      double dist = Math.sin(deg2rad(lat1)) * Math.sin(deg2rad(lat2)) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.cos(deg2rad(theta));
		      dist = Math.acos(dist);
		      dist = rad2deg(dist);
		      dist = dist * 60 * 1.1515;
		      if (unit == 'K') {
		        dist = dist * 1.609344;
		      } else if (unit == 'N') {
		        dist = dist * 0.8684;
		      }
		      return (dist);
		}
	      
	      
	 }

    private double deg2rad(double deg) {
      return (deg * Math.PI / 180.0);
    }

    private double rad2deg(double rad) {
      return (rad * 180.0 / Math.PI);
    }
	
}
