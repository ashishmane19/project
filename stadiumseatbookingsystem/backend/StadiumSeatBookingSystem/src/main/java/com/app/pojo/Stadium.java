package com.app.pojo;

import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "stadium")
public class Stadium {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int stadiumId;
	private String stadiumName;
	private String stadiumCity;
	private String managerName;
	private String managerContact;
	@OneToMany(mappedBy = "stadium",cascade = CascadeType.ALL)
	private List<Screen> screen;
	@JsonIgnore
	@OneToMany(mappedBy = "stadium",cascade = CascadeType.ALL)
	private List<Show> show;

	public Stadium() {

	}

	public Stadium(String stadiumName, String stadiumCity, String managerName, String managerContact,
			List<Screen> screen, List<Show> show) {
		super();
		this.stadiumName = stadiumName;
		this.stadiumCity = stadiumCity;
		this.managerName = managerName;
		this.managerContact = managerContact;
		this.screen = screen;
		this.show = show;
	}

	public int getStadiumId() {
		return stadiumId;
	}

	public void setStadiumId(int stadiumId) {
		this.stadiumId = stadiumId;
	}

	public String getStadiumName() {
		return stadiumName;
	}

	public void setStadiumName(String stadiumName) {
		this.stadiumName = stadiumName;
	}

	public String getStadiumCity() {
		return stadiumCity;
	}

	public void setStadiumCity(String stadiumCity) {
		this.stadiumCity = stadiumCity;
	}

	public String getManagerName() {
		return managerName;
	}

	public void setManagerName(String managerName) {
		this.managerName = managerName;
	}

	public String getManagerContact() {
		return managerContact;
	}

	public void setManagerContact(String managerContact) {
		this.managerContact = managerContact;
	}

	public List<Screen> getScreen() {
		return screen;
	}

	public void setScreen(List<Screen> screen) {
		this.screen = screen;
	}

	public List<Show> getShow() {
		return show;
	}

	public void setShow(List<Show> show) {
		this.show = show;
	}
}
