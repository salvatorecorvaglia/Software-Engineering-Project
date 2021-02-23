package it.myalert.converter;

import org.springframework.beans.factory.annotation.Autowired;

import it.myalert.DTO.TypeDTO;
import it.myalert.entities.Type;

public class TypeConverter implements Converter<TypeDTO, Type> {

	@Autowired
	ManagerConverter managerConverter;
	@Override
	public TypeDTO convertToDTO(Type type) {
		
		TypeDTO typeDTO = new TypeDTO();
		typeDTO.setIdType(type.getIdType());
		if(type.getManager() != null) {			
			typeDTO.setManagerDTO(managerConverter.convertToDTO(type.getManager()));
		}
		typeDTO.setName(type.getName());
		return typeDTO;
	}

	@Override
	public Type convertToEntity(TypeDTO typeDTO) {

		Type type = new Type();
		type.setIdType(typeDTO.getIdType());
		if(typeDTO.getManagerDTO() != null) {			
			type.setManager(managerConverter.convertToEntity(typeDTO.getManagerDTO()));
		}
		type.setName(typeDTO.getName());
		return type;
	}

}
