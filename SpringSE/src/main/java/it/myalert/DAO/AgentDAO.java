package it.myalert.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import it.myalert.entities.Agent;

@Repository
public interface AgentDAO extends JpaRepository<Agent, Integer>{

	@Modifying
	@Query(value= "INSERT INTO agent (idUser_FK, HireDate, EndDate, idManager_FK) " +
				  "VALUES (:idUser, :#{#Agent.hireDate}, :#{#Agent.endDate}, :idManager);", nativeQuery = true)
	public void addAgent (@Param("Agent")Agent Agent, @Param("idManager")int idManager, @Param("idUser")int idUser);
	
	
	
	

}
