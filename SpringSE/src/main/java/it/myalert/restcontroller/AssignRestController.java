package it.myalert.restcontroller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.firebase.messaging.FirebaseMessagingException;

import it.myalert.DTO.AgentDTO;
import it.myalert.DTO.AssignDTO;
import it.myalert.DTO.InterventionDTO;
import it.myalert.DTO.ManagerDTO;
import it.myalert.DTO.UserDTO;
import it.myalert.entities.Alarm;
import it.myalert.entities.Assign;
import it.myalert.entities.Intervention;
import it.myalert.exeption.AgentExeption;
import it.myalert.exeption.AssignExeption;
import it.myalert.exeption.InterventionExeption;
import it.myalert.exeption.ManagerExeption;
import it.myalert.exeption.UserExeption;
import it.myalert.firebase.FCMService;
import it.myalert.services.AgentService;
import it.myalert.services.AlarmService;
import it.myalert.services.AssignService;
import it.myalert.services.InterventionService;
import it.myalert.services.ManagerService;
import it.myalert.services.UserService;

@RestController
@RequestMapping("/assign")
public class AssignRestController {

	@Autowired
	private AssignService assignService;
	@Autowired
	private ManagerService managerService;
	@Autowired
	private AgentService agentService;
	@Autowired
	private InterventionService interventionService;
	@Autowired
	private FCMService fcmService;
	@Autowired
	private UserService userService;
	@Autowired
	private AlarmService alarmService;

	@PostMapping(value="/assignAgentToIntervention/{idManager}", consumes = MediaType.APPLICATION_JSON_VALUE ,produces = MediaType.APPLICATION_JSON_VALUE)
	public AssignDTO post(@PathVariable("idManager") int idManager ,@RequestParam("idAgent") int idAgent, @RequestParam("idIntervention") int idIntervention, @RequestParam("idUser") int idUser) throws AgentExeption, ManagerExeption,FirebaseMessagingException, UserExeption, InterventionExeption{

		ManagerDTO managerDTO = this.managerService.convertToDTO(this.managerService.getById(idManager));
		AgentDTO agentDTO = this.agentService.convertToDTO(this.agentService.getAgentById(idAgent));
		InterventionDTO interventionDTO = this.interventionService.convertToDTO(this.interventionService.getById(idIntervention));
		AssignDTO assignDTO = new AssignDTO();
		assignDTO.setManager(managerDTO);
		assignDTO.setAgent(agentDTO);
		interventionDTO.setStatus("assigned");
		interventionDTO.setStartDate(null);
		assignDTO.setIntervention(interventionDTO);
		assignDTO.setStartValidate(new Date());
		assignDTO.setConfirm(false);
		assignDTO.setConcluded(false);
		Assign assign = this.assignService.convertToEntity(assignDTO);
		this.interventionService.updateIntervention(this.interventionService.convertToEntity(interventionDTO));

		String title;
		String token;
		String body;

		UserDTO userDTO = this.userService.convertToDTO(this.userService.getUserById(idUser));
		token = userDTO.getToken();
		if (token != null) {
			title = "MyAlert";
			body = "You have a new assign to confirm!";
			this.fcmService.SendToOne(token, title, body);
			return this.assignService.convertToDTO(this.assignService.assignAgentToIntervention(assign));
		}else {
			return this.assignService.convertToDTO(this.assignService.assignAgentToIntervention(assign));
		}
	}
	
	@GetMapping(value="/getAssignById/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public AssignDTO getAssignById(@PathVariable("id") int id) throws AssignExeption{
		
		Assign assign = this.assignService.getAssignById(id);
		return this.assignService.convertToDTO(assign);
		
	}
	
	@GetMapping(value="/getAssignByIdIntervention/{idIntervention}", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<AssignDTO> getAssignByIdIntervention(@PathVariable("idIntervention") int idIntervention) throws InterventionExeption{
		
		Iterator<Assign> listIT = this.assignService.getAssignByIdIntervention(idIntervention).iterator();
		List<AssignDTO> listDTO = new ArrayList<AssignDTO>();
		
		while(listIT.hasNext()) {
			listDTO.add(this.assignService.convertToDTO(listIT.next()));
		}
		
		if(listDTO.isEmpty()) {
			return Collections.emptyList();
		}
		
		return listDTO;
		
	}
	
	@GetMapping(value="/getAllAssignByIdAgent/{idAgent}", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<AssignDTO> getAllAlarmByIdIntervention(@PathVariable("idAgent") int idAgent) throws AgentExeption{
		
		Iterator<Assign> listIT = this.assignService.getAssignByIdAgent(idAgent).iterator();
		List<AssignDTO> listDTO = new ArrayList<AssignDTO>();
		
		while(listIT.hasNext()) {
			listDTO.add(this.assignService.convertToDTO(listIT.next()));
		}
		
		if(listDTO.isEmpty()) {
			return Collections.emptyList();
		}
		
		return listDTO;
		
	}
	
	@GetMapping(value="/getAllAssignByIdAgentAndOrder/{idAgent}", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<AssignDTO> getAllAssignByIdAgentAndOrder(@PathVariable("idAgent") int idAgent, @RequestParam("field") String field) throws AgentExeption, AssignExeption{
		
		Iterator<Assign> listIT = this.assignService.getAllAssignAndOrderByFieldName(idAgent, field).iterator();
		List<AssignDTO> listDTO = new ArrayList<AssignDTO>();
		
		while(listIT.hasNext()) {
			listDTO.add(this.assignService.convertToDTO(listIT.next()));
		}
		
		if(listDTO.isEmpty()) {
			return Collections.emptyList();
		}
		
		return listDTO;
		
	}
	
	@PutMapping(value="/updateAssign/{idAssign}", consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE)
	public AssignDTO updateAssign(@PathVariable("idAssign") int idAssign, @RequestBody AssignDTO assignDTO) throws AssignExeption, InterventionExeption,FirebaseMessagingException {	

		Integer idInt;
		Boolean confirm;
		Boolean concluded;
		Intervention intervention = this.interventionService.updateIntervention(this.interventionService.convertToEntity(assignDTO.getIntervention()));
		Assign assign = this.assignService.convertToEntity(assignDTO);
		assign.setIntervention(intervention);
		idInt = assign.getIntervention().getIdIntervention();
		Intervention intervention1 = this.interventionService.getById(idInt);
		String firstReport;
		firstReport = intervention1.getFirstReport();
		confirm = assign.getConfirm();
		concluded = assign.getConcluded();
        List<Alarm> listalarm = this.alarmService.getAllAlarmByIdIntervention(idInt);
		Iterator<Alarm> listaalarmIT = listalarm.iterator();
		String token;
		String body;
		String title;
		while(listaalarmIT.hasNext()) {
			Alarm alarmIT = listaalarmIT.next();
			token = alarmIT.getCitizen().getUser().getToken();
			if (confirm == true && firstReport == null && concluded == false ) {
				if (token != null) {
					title = "MyAlert";
					body = "Your alert is assigned!";
					this.fcmService.SendToOne(token, title, body);
				}
			} else if (confirm == true && concluded == true) {
				if (token != null) {
					title = "MyAlert";
					body = "Your alert is closed!";
					this.fcmService.SendToOne(token, title, body);
				}
				
			}
			
		}
		
		return this.assignService.convertToDTO(this.assignService.updateAssign(assign));
	}
}
