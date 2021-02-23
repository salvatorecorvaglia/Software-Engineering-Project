package it.myalert.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.myalert.entities.Alarm;

@Repository
public interface AlarmDAO extends JpaRepository<Alarm, Integer> {

	public List<Alarm> findByIntervention_idIntervention(int idIntervention);
	public List<Alarm> findByCitizen_idCitizen(int idCitizen);
}
