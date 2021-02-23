package it.myalert.DTO;

import java.util.Date;

public class ManagerDTO {
	
	private UserDTO user;
	private int idManager;
	
	
	
	public int getIdManager() {
		return idManager;
	}

	public void setIdManager(int idManager) {
		this.idManager = idManager;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}
	



}
