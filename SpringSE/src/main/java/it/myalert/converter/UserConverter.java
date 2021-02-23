package it.myalert.converter;

import java.sql.Timestamp;
import java.util.Date;

import it.myalert.DTO.UserDTO;
import it.myalert.entities.User;

public class UserConverter implements Converter<UserDTO, User> {

	@Override
	public UserDTO convertToDTO(User user) {
		
		UserDTO userDTO = new UserDTO();
		userDTO.setIdUser(user.getIdUser());
		userDTO.setName(user.getName());
		userDTO.setSurname(user.getSurname());
		userDTO.setEmail(user.getEmail());
		userDTO.setBirthDate(new Date(user.getBirthDate().getTime()));
		userDTO.setSex(user.getSex());
		userDTO.setAddress(user.getAddress());
		userDTO.setCity(user.getCity());
		userDTO.setState(user.getState());
		userDTO.setToken(user.getToken());
		return userDTO;
	}

	@Override
	public User convertToEntity(UserDTO userDTO) {

		User user = new User();
		user.setIdUser(userDTO.getIdUser());
		user.setName(userDTO.getName());
		user.setSurname(userDTO.getSurname());
		user.setEmail(userDTO.getEmail());
		user.setBirthDate(new Timestamp(userDTO.getBirthDate().getTime()));
		user.setSex(userDTO.getSex());
		user.setAddress(userDTO.getAddress());
		user.setCity(userDTO.getCity());
		user.setState(userDTO.getState());
		user.setToken(userDTO.getToken());
		return user;
	}


}
