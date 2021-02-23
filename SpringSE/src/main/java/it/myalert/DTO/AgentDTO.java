package it.myalert.DTO;

import java.util.Date;

public class AgentDTO{

	private Integer idAgent;
	private UserDTO user;
	private Double lat;
	private Double lon;
	private Date hireDate;
	private Date endDate;
	private ManagerDTO manager;
	
	
	
	public Double getLat() {
		return lat;
	}
	public void setLat(Double lat) {
		this.lat = lat;
	}
	public Double getLon() {
		return lon;
	}
	public void setLon(Double lon) {
		this.lon = lon;
	}
	public Date getHireDate() {
		return hireDate;
	}
	public void setHireDate(Date hireDate) {
		this.hireDate = hireDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public Integer getIdAgent() {
		return idAgent;
	}
	public void setIdAgent(Integer idAgent) {
		this.idAgent = idAgent;
	}
	public UserDTO getUserDTO() {
		return user;
	}
	public void setUserDTO(UserDTO user) {
		this.user = user;
	}
	public ManagerDTO getManagerDTO() {
		return manager;
	}
	public void setManagerDTO(ManagerDTO managerDTO) {
		this.manager = managerDTO;
	}
	
	
	
	
}
