package it.myalert.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.myalert.entities.Type;

@Repository
public interface TypeDAO extends JpaRepository<Type, Integer>{

}
