package it.myalert.converter;

import java.util.Date;
import java.sql.Timestamp;

import org.springframework.beans.factory.annotation.Autowired;

import it.myalert.DTO.AssignDTO;
import it.myalert.entities.Assign;

public class AssignConverter implements Converter<AssignDTO, Assign>{

	@Autowired
	private ManagerConverter managerConverter;
	@Autowired
	private AgentConverter agentConverter;
	@Autowired
	private InterventionConverter interventionConverter;
	
	@Override
	public AssignDTO convertToDTO(Assign assign) {

		AssignDTO assignDTO = new AssignDTO();
		assignDTO.setIdAssign(assign.getIdAssign());
		assignDTO.setManager(managerConverter.convertToDTO(assign.getManager()));
		assignDTO.setAgent(agentConverter.convertToDTO(assign.getAgent()));
		assignDTO.setConfirm(assign.getConfirm());
		assignDTO.setConcluded(assign.getConcluded());
		if(assign.getStartValidate() != null) assignDTO.setStartValidate(new Date(assign.getStartValidate().getTime()));
		if(assign.getEndValidate() != null) assignDTO.setEndValidate(new Date(assign.getEndValidate().getTime()));
		assignDTO.setIntervention(interventionConverter.convertToDTO(assign.getIntervention()));
		return assignDTO;
	}

	@Override
	public Assign convertToEntity(AssignDTO assignDTO) {

		Assign assign = new Assign();
		assign.setIdAssign(assignDTO.getIdAssign());
		assign.setManager(managerConverter.convertToEntity(assignDTO.getManager()));
		assign.setAgent(agentConverter.convertToEntity(assignDTO.getAgent()));
		assign.setConfirm(assignDTO.getConfirm());
		assign.setConcluded(assignDTO.getConcluded());
		if(assignDTO.getStartValidate() != null) assign.setStartValidate(new Timestamp(assignDTO.getStartValidate().getTime()));
		if(assignDTO.getEndValidate() != null) assign.setEndValidate(new Timestamp(assignDTO.getEndValidate().getTime()));
		assign.setIntervention(interventionConverter.convertToEntity(assignDTO.getIntervention()));
		return assign;
	}

}
