package it.myalert.restcontroller;

import java.util.ArrayList;
import java.util.Collections;
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

import it.myalert.DTO.AgentDTO;
import it.myalert.DTO.ManagerDTO;
import it.myalert.DTO.UserDTO;
import it.myalert.entities.Agent;
import it.myalert.entities.User;
import it.myalert.exeption.AgentExeption;
import it.myalert.exeption.ManagerExeption;
import it.myalert.exeption.UserExeption;
import it.myalert.services.AgentService;
import it.myalert.services.ManagerService;
import it.myalert.services.UserService;

@RestController
@RequestMapping("/agent")
public class AgentRestController {


	@Autowired
	private AgentService agentService;
	@Autowired
	private ManagerService managerService;
	@Autowired
	private UserService userService;

	@PostMapping(value="/addAgent/{idManager}", consumes=MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public AgentDTO post(@RequestBody AgentDTO agentDTO, @PathVariable("idManager") int idManager) throws AgentExeption, ManagerExeption {
		ManagerDTO managerDTO = managerService.convertToDTO(managerService.getById(idManager));
		agentDTO.setManagerDTO(managerDTO);

		Agent agent = this.agentService.addAgent(agentService.convertToEntity(agentDTO), idManager);
		return this.agentService.convertToDTO(agent);

	}

	@GetMapping(value="/getAllAgent", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<AgentDTO> getAll(){

		List<Agent> list = agentService.getAll();
		List<AgentDTO> listDTO = new ArrayList<AgentDTO>();
		Iterator<Agent> utenteIT = list.iterator();

		while(utenteIT.hasNext()) {

			listDTO.add(agentService.convertToDTO(utenteIT.next()));
		}

		if(listDTO.isEmpty()) {
			return Collections.emptyList();
		}

		return listDTO;
	}

	@GetMapping(value="/getAgent/{idAgent}", produces=MediaType.APPLICATION_JSON_VALUE)
	public AgentDTO getAgentById(@PathVariable("idAgent") int idAgent) throws AgentExeption{

		Agent agent = this.agentService.getAgentById(idAgent);
		return this.agentService.convertToDTO(agent);

	}

	@GetMapping(value="/getAgentByPosition", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<AgentDTO> getAgentByPosition(@RequestParam("lat") double lat, @RequestParam("lon") double lon, @RequestParam("distance") double distance) throws AgentExeption{

		List<AgentDTO> listDTO = new ArrayList<AgentDTO>();
		Double dis = Double.valueOf(distance);
		Iterator<Agent> agentIT = this.agentService.getAll().iterator();
		while(agentIT.hasNext()) {
			Agent agent = agentIT.next();
			if (agent.getLat() != null && agent.getLon() != null) {
				Double distance2 = this.distance2(agent.getLat(), agent.getLon(), lat, lon, 'K');
				System.out.print("\n\ndistance= "+distance);
				System.out.print("\ndistance2= "+distance2);
				if(distance2 < dis) {
					listDTO.add(this.agentService.convertToDTO(agent));
				}
			}
		}

		return listDTO;

	}

	@PutMapping(value="/updatePosition/{idAgent}", consumes=MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public AgentDTO updatePosition(@PathVariable("idAgent") int idAgent, @RequestParam("lat") Double lat, @RequestParam("lon") Double lon) throws AgentExeption {
		Agent agent = this.agentService.updatePosition(lat, lon, idAgent);
		return this.agentService.convertToDTO(agent);
	}

	@PutMapping(value="/updateAgent/{idUser}", produces = MediaType.APPLICATION_JSON_VALUE)
	public UserDTO updateUser(@RequestBody UserDTO userDTO, @PathVariable("idUser") int idUser) throws UserExeption {
		System.out.print("parameter:" + userDTO.toString());
		User user = userService.updateUser(userService.convertToEntity(userDTO), idUser);
		return userService.convertToDTO(user);
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
