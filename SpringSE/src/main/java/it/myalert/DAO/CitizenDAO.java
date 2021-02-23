package it.myalert.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.myalert.entities.Citizen;

@Repository
public interface CitizenDAO extends JpaRepository<Citizen, Integer> {

}
