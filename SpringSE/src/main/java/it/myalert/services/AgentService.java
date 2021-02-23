package it.myalert.services;

import java.util.List;

import it.myalert.DTO.AgentDTO;
import it.myalert.converter.Converter;
import it.myalert.entities.Agent;
import it.myalert.exeption.AgentExeption;

public interface AgentService extends Converter<AgentDTO, Agent> {

	public List<Agent> getAll();
	public Agent addAgent(Agent agent, int idManager) throws AgentExeption;
	public Agent getAgentById(int idAgent) throws AgentExeption;
	public Agent updatePosition(Double lat, Double lon, int idAgent) throws AgentExeption;
	public Agent updateAgent(Agent agent, int idAgent) throws AgentExeption;
}
