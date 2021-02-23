package it.myalert.DTO;

import java.util.Date;

public class InterventionDTO {
	
	private Integer idIntervention;
	private TypeDTO type;
	private Double lat;
	private Double lon;
	private String address;
	private String city;
	private Date startDate;
	private Date endDate;
	private String firstReport;
	private String lastReport;
	private String status;
	private int count;
	
	
	
	public Integer getIdIntervention() {
		return idIntervention;
	}
	public void setIdIntervention(Integer idIntervention) {
		this.idIntervention = idIntervention;
	}
	public TypeDTO getType() {
		return type;
	}
	public void setType(TypeDTO type) {
		this.type = type;
	}
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
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public String getFirstReport() {
		return firstReport;
	}
	public void setFirstReport(String firstReport) {
		this.firstReport = firstReport;
	}
	public String getLastReport() {
		return lastReport;
	}
	public void setLastReport(String lastReport) {
		this.lastReport = lastReport;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	
}
