package it.myalert.converter;

public interface Converter<ToDTO, FromDTO> {

	public ToDTO convertToDTO(FromDTO fromdto);
	public FromDTO convertToEntity(ToDTO todto);

}
