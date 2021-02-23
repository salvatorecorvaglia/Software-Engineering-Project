package it.myalert.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.myalert.entities.User;

@Repository
public interface UserDAO extends JpaRepository<User, Integer> {

	public User findByEmail(String email);
	
	
}
