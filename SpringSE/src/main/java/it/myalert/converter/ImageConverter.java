package it.myalert.converter;

import org.springframework.beans.factory.annotation.Autowired;

import it.myalert.DTO.ImageDTO;
import it.myalert.entities.Image;

public class ImageConverter implements Converter<ImageDTO, Image>{

	@Autowired
	private UserConverter userConverter;
	@Autowired
	private InterventionConverter interventionConverter;
	
	@Override
	public ImageDTO convertToDTO(Image image) {

		ImageDTO imageDTO = new ImageDTO();
		imageDTO.setIdImage(image.getIdImage());
		imageDTO.setUrl(image.getUrl());
		imageDTO.setLat(image.getLat());
		imageDTO.setLon(image.getLon());
		imageDTO.setIdFire(image.getIdFire());
		imageDTO.setUser(userConverter.convertToDTO(image.getUser()));
		imageDTO.setIntervention(interventionConverter.convertToDTO(image.getIntervention()));
		return imageDTO;
	}

	@Override
	public Image convertToEntity(ImageDTO imageDTO) {

		Image image = new Image();
		image.setIdImage(imageDTO.getIdImage());
		image.setUrl(imageDTO.getUrl());
		image.setLat(imageDTO.getLat());
		image.setLon(imageDTO.getLon());
		image.setIdFire(imageDTO.getIdFire());
		image.setUser(userConverter.convertToEntity(imageDTO.getUser()));
		image.setIntervention(interventionConverter.convertToEntity(imageDTO.getIntervention()));
		return image;
	}

}
