package com.app.service;

import java.time.LocalDate;
import java.util.List;

import com.app.pojo.Show;

public interface ShowService {

	public Show addShow(Show show, Integer stadiumId, Integer screenId);

	public Show updateShow(Show show, Integer stadiumId, Integer screenId);

	public Show removeShow(int showid);

	public Show viewShow(int showid);

	public List<Show> viewAllShows();

	public List<Show> viewShowList(int stadiumid);

	public List<Show> viewShowList(LocalDate date);

}
