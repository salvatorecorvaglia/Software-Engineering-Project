package it.myalert.services;

import it.myalert.DTO.ImageDTO;
import it.myalert.converter.Converter;
import it.myalert.entities.Image;
import it.myalert.exeption.CitizenExeption;
import it.myalert.exeption.ImageExeption;
import it.myalert.exeption.InterventionExeption;
import it.myalert.exeption.UserExeption;
import org.omg.CORBA.UserException;

import java.util.List;

public interface ImageService extends Converter<ImageDTO, Image> {
	
	public List<Image> getAll();
	public List<Image> getAllImageByIdIntervention(int idIntervention) throws InterventionExeption;
	public List<Image> findByIntervention_idInterventionAndUser_idUser(int idIntervention, int idUser) throws InterventionExeption, UserException;
	public Image addImage(Image image) throws UserExeption;
	public Boolean deleteImage(int idImage) throws ImageExeption;
	public Boolean deleteImageByIdCitizen(int idCitizen) throws CitizenExeption;

}
