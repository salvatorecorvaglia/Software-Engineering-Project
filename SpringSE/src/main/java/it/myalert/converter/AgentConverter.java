package it.myalert.converter;

import java.sql.Timestamp;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;

import it.myalert.DTO.AgentDTO;
import it.myalert.entities.Agent;

public class AgentConverter implements Converter<AgentDTO, Agent>{

	@Autowired
	UserConverter userConverter;
	
	@Autowired
	ManagerConverter managerConverter;
	
	@Override
	public AgentDTO convertToDTO(Agent agent) {
		
		AgentDTO agentDTO = new AgentDTO();
		agentDTO.setIdAgent(agent.getIdAgent());
		if(agent.getUser() != null) {			
			agentDTO.setUserDTO(userConverter.convertToDTO(agent.getUser()));
		}
		if(agent.getManager() != null) {			
			agentDTO.setManagerDTO(managerConverter.convertToDTO(agent.getManager()));
		}
		agentDTO.setLat(agent.getLat());
		agentDTO.setLon(agent.getLon());
		agentDTO.setHireDate(new Date(agent.getHireDate().getTime()));
		if(agent.getEndDate() != null) {
			agentDTO.setEndDate(new Date(agent.getEndDate().getTime()));
		}
		
		return agentDTO;
	}

	@Override
	public Agent convertToEntity(AgentDTO agentDTO) {

		Agent agent = new Agent();
		agent.setIdAgent(agentDTO.getIdAgent());
		agent.setUser(userConverter.convertToEntity(agentDTO.getUserDTO()));
		if(agentDTO.getManagerDTO() != null) {			
			agent.setManager(managerConverter.convertToEntity(agentDTO.getManagerDTO()));
		}
		agent.setLat(agentDTO.getLat());
		agent.setLon(agentDTO.getLon());
		agent.setHireDate(new Timestamp(agentDTO.getHireDate().getTime()));
		if(agentDTO.getEndDate() != null) {
			agent.setEndDate(new Timestamp(agentDTO.getHireDate().getTime()));
		}
		
		return agent;
	}

}
