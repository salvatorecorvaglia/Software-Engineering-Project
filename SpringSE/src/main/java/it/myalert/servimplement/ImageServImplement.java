package it.myalert.servimplement;

import java.util.List;

import javax.transaction.Transactional;

import org.omg.CORBA.UserException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.myalert.converter.ImageConverter;
import it.myalert.entities.Image;
import it.myalert.exeption.CitizenExeption;
import it.myalert.exeption.ImageExeption;
import it.myalert.exeption.InterventionExeption;
import it.myalert.exeption.UserExeption;
import it.myalert.DAO.ImageDAO;
import it.myalert.services.ImageService;

@Service
@Transactional(rollbackOn = ImageExeption.class)
public class ImageServImplement extends ImageConverter implements ImageService {
	
	@Autowired
	private ImageDAO imageDAO;
	
	@Override
	public List<Image> getAll() {
		List<Image> list = this.imageDAO.findAll();
		return list;
	}

	@Override
	public List<Image> getAllImageByIdIntervention(int idIntervention) throws InterventionExeption {
		return this.imageDAO.findByIntervention_idIntervention(idIntervention);
	}
	
	@Override
	public List<Image> findByIntervention_idInterventionAndUser_idUser(int idIntervention, int idUser) throws InterventionExeption,UserException {
		return imageDAO.findByIntervention_idInterventionAndUser_idUser(idIntervention, idUser);
	}
	
	@Override
	public Image addImage(Image image) throws UserExeption {
		image.setIdImage(null);
		return this.imageDAO.save(image);
	}
	
	@Override
	public Boolean deleteImage(int idImage) throws ImageExeption {
		
		Image image = this.imageDAO.findById(idImage).orElseThrow(()-> new ImageExeption("ERROR: No image found with id:"+ idImage));
		if(image != null) {
			this.imageDAO.delete(image);
			return true;
		}
		return false;
	}

	@Override
	public Boolean deleteImageByIdCitizen(int idUser) throws CitizenExeption {
		int num = this.imageDAO.deleteByUser_idUser(idUser);
		System.out.print("numero eliminati: "+num);
		return true;
	}

}
