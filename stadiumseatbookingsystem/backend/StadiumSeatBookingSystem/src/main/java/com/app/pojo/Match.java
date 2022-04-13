package com.app.pojo;

import java.sql.Blob;
import java.time.LocalDate;

import javax.persistence.*;

import org.hibernate.annotations.DynamicUpdate;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;

/**
 * 
 *
 */
@Entity
@Table(name = "matchs")
@DynamicUpdate
public class Match {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int matchId;
	private String matchName;
	private String matchGenre;
	private String matchHours;
	private String matchLanguage;
	private String matchDescription;
	private String matchRating;
	@JsonDeserialize(using = LocalDateDeserializer.class)
	@JsonSerialize(using = LocalDateSerializer.class)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private LocalDate matchDate;
	@JsonIgnore
	@OneToOne
	private Show show;

	public Match() {

	}

	public Match(String matchName, String matchGenre, String matchHours, String matchLanguage, String matchDescription,
			String matchRating, LocalDate matchDate, Show show) {
		super();
		this.matchName = matchName;
		this.matchGenre = matchGenre;
		this.matchHours = matchHours;
		this.matchLanguage = matchLanguage;
		this.matchDescription = matchDescription;
		this.matchRating = matchRating;
		this.matchDate = matchDate;
		this.show = show;
	}

	public int getMatchId() {
		return matchId;
	}

	public void setMatchId(int matchId) {
		this.matchId = matchId;
	}

	public String getMatchName() {
		return matchName;
	}

	public void setMatchName(String matchName) {
		this.matchName = matchName;
	}

	public String getMatchGenre() {
		return matchGenre;
	}

	public void setMatchGenre(String matchGenre) {
		this.matchGenre = matchGenre;
	}

	public String getMatchHours() {
		return matchHours;
	}

	public void setMatchHours(String matchHours) {
		this.matchHours = matchHours;
	}

	public String getMatchLanguage() {
		return matchLanguage;
	}

	public void setMatchLanguage(String matchLanguage) {
		this.matchLanguage = matchLanguage;
	}

	public String getMatchDescription() {
		return matchDescription;
	}

	public void setMatchDescription(String matchDescription) {
		this.matchDescription = matchDescription;
	}

	public String getMatchRating() {
		return matchRating;
	}

	public void setMatchRating(String matchRating) {
		this.matchRating = matchRating;
	}

	public LocalDate getMatchDate() {
		return matchDate;
	}

	public void setMatchDate(LocalDate matchDate) {
		this.matchDate = matchDate;
	}

	public Show getShow() {
		return show;
	}

	public void setShow(Show show) {
		this.show = show;
	}

}
