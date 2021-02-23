package it.myalert.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.myalert.entities.Image;

@Repository
public interface ImageDAO extends JpaRepository<Image, Integer>{
	
	public List<Image> findByIntervention_idIntervention(int idIntervention);
	public List<Image> findByIntervention_idInterventionAndUser_idUser(int idIntervention, int idUser);
	public int deleteByUser_idUser(int idUser);

}
