package it.myalert.servimplement;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.myalert.converter.TypeConverter;
import it.myalert.entities.Type;
import it.myalert.exeption.ManagerExeption;
import it.myalert.exeption.TypeExeption;
import it.myalert.DAO.TypeDAO;
import it.myalert.services.TypeService;

@Service
@Transactional(rollbackOn = ManagerExeption.class)
public class TypeServImplement extends TypeConverter implements TypeService {

	
	@Autowired
	private TypeDAO typeDAO;
	
	@Override
	public List<Type> getAll() {
		
		return this.typeDAO.findAll();
	}
	
	@Override
	public Type getTypeById(int idType) throws TypeExeption {
		return this.typeDAO.findById(idType).orElseThrow(()-> new TypeExeption("ERROR: No type found with id:"+ idType));
		
	}
	
	@Override
	public Type addType(Type type) throws ManagerExeption {
		type.setIdType(null);
		return this.typeDAO.save(type);
	}

	@Override
	public Type updateType(Type type) throws TypeExeption {
		
		return this.typeDAO.save(type);
	}

	@Override
	public Boolean deleteType(int idType) throws TypeExeption {
		
		Type type = this.typeDAO.findById(idType).orElseThrow(()-> new TypeExeption("ERROR: No type found with id:"+ idType));
		if(type != null) {
			this.typeDAO.delete(type);
			return true;
		}
		return false;
	}

	

	

}
