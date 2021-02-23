package it.myalert.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.myalert.entities.Intervention;

@Repository
public interface InterventionDAO extends JpaRepository<Intervention, Integer>{

	
	public List<Intervention> findByStatusAndType_idType(String status, int idType);
	public List<Intervention> findByStatusOrderByStartDate(String status);
	


}
