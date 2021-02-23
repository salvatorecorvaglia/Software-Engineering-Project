package it.myalert.DAO;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.myalert.entities.Manager;

@Repository
public interface ManagerDAO extends JpaRepository<Manager, Integer> {
	
	
}
