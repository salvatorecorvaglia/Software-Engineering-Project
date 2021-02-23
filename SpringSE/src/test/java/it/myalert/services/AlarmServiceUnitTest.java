package it.myalert.services;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import it.myalert.entities.Alarm;
import it.myalert.entities.Citizen;
import it.myalert.entities.Intervention;
import it.myalert.entities.Manager;
import it.myalert.entities.Type;
import it.myalert.entities.User;
import it.myalert.exeption.AlarmExeption;
import it.myalert.exeption.CitizenExeption;
import it.myalert.exeption.InterventionExeption;
import it.myalert.servimplement.AlarmServImplement;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class AlarmServiceUnitTest {
	
	@Autowired
	private AlarmServImplement alarmServImplement;
	
	@Mock
	private AlarmServImplement alarmServiceImplMock;
	
	private Alarm alarm;
	
	@BeforeEach
	void setUpEnv() {
		
		alarm = new Alarm();
		Citizen citizen = new Citizen();
		User user = new User();
		Intervention intervention = new Intervention();
		Type type = new Type();
		Manager manager = new Manager();

		user = new User();
		user.setIdUser(4);
		user.setName("Salvatore");
		user.setSurname("Corvaglia");
		user.setEmail("s.corvagliabooking@gmail.com");
		user.setBirthDate(new Timestamp(new Date().getTime()));
		user.setSex("M");
		user.setAddress("Via Pasquale Ferraro, 60");
		user.setCity("Diso");
		user.setState("Italy");

		manager.setIdManager(1);
		manager.setUser(user);

		type.setIdType(1);
		type.setName("type");
		type.setManager(manager);

		intervention.setType(type);
		intervention.setIdIntervention(1);
		intervention.setLat(10.0);
		intervention.setLon(10.0);
		intervention.setAddress("Address");
		intervention.setStatus("signaled");

		citizen.setIdCitizen(1);
		citizen.setUser(user);

		alarm.setIntervention(intervention);
		alarm.setCitizen(citizen);
		alarm.setIdAlarm(1);
	}
	
	@Test
	void getAll() {
		assertThat(this.alarmServImplement.getAll()).isNotNull();
	}

	@Test
	void getAlarmById() throws AlarmExeption {
		
		Exception exc = assertThrows(AlarmExeption.class, () -> this.alarmServImplement.getAlarmById(100));
        assertTrue(exc.getMessage().contains("ERROR: No alarm found with id:"+ 100));
        assertThat(this.alarmServImplement.getAlarmById(1)).isNotNull();
	}
	
	@Test
	void addAlarm() throws AlarmExeption {
		when(this.alarmServiceImplMock.addAlarm(alarm)).thenReturn(alarm);
		int id = this.alarmServiceImplMock.addAlarm(alarm).getIdAlarm();
		assertThat(id).isEqualTo(1);
	}

	@Test
	void getAllAlarmByIdIntervention() throws InterventionExeption {
		
		List<Alarm> list = new ArrayList<>();
		list = this.alarmServImplement.getAllAlarmByIdIntervention(alarm.getIntervention().getIdIntervention());
		Iterator<Alarm> listIT = list.iterator();
		while(listIT.hasNext()) {
			assertThat(listIT.next().getIntervention().getIdIntervention()).isEqualTo(alarm.getIntervention().getIdIntervention());
		}
		
	}

	@Test
	void getAllAlarmByIdCitizen() throws CitizenExeption {
		
		List<Alarm> list = new ArrayList<>();
		list = this.alarmServImplement.getAllAlarmByIdCitizen(alarm.getCitizen().getIdCitizen());
		Iterator<Alarm> listIT = list.iterator();
		while(listIT.hasNext()) {
			assertThat(listIT.next().getCitizen().getIdCitizen()).isEqualTo(alarm.getCitizen().getIdCitizen());
		}
	}
	
	@Test
	void deleteAlarm() throws AlarmExeption {
		Exception exc = assertThrows(AlarmExeption.class, () -> {
            this.alarmServImplement.deleteAlarm(100);
            verify(this.alarmServiceImplMock).deleteAlarm(100);
        });
        assertTrue(exc.getMessage().contains("ERROR: No alarm found with id:"+ 100));
	};

}
