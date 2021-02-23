package it.myalert.services;

import java.util.List;

import it.myalert.DTO.TypeDTO;
import it.myalert.converter.Converter;
import it.myalert.entities.Type;
import it.myalert.exeption.ManagerExeption;
import it.myalert.exeption.TypeExeption;

public interface TypeService extends Converter<TypeDTO, Type>{
	
	public List<Type> getAll(); 
	public Type getTypeById(int idType) throws TypeExeption;
	public Type addType(Type type) throws ManagerExeption;
	public Type updateType(Type type) throws TypeExeption;
	public Boolean deleteType(int idType) throws TypeExeption;

}
