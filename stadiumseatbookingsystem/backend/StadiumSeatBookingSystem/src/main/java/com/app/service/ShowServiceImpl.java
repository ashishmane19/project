package com.app.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojo.Screen;
import com.app.pojo.Show;
import com.app.pojo.Stadium;
import com.app.repository.ScreenRepository;
import com.app.repository.ShowRepository;
import com.app.repository.StadiumRepository;

@Service
public class ShowServiceImpl implements ShowService {
	@Autowired
	private ShowRepository showrepository;
	@Autowired
	private StadiumRepository stadiumRepository;
	@Autowired
	private ScreenRepository screenRepository;

	@Override
	public Show addShow(Show show, Integer stadiumId, Integer screenId) {
		Stadium stadium = new Stadium();
		Screen screen = new Screen();
		if (stadiumId != null) {
			stadium = stadiumRepository.getOne(stadiumId);
			show.setStadium(stadium);
		}
		if (screenId != null) {
			screen = screenRepository.getOne(screenId);
			show.setScreen(screen);
		}
		showrepository.saveAndFlush(show);
		return show;
	}

	@Override
	public Show updateShow(Show show, Integer stadiumId, Integer screenId) {
		Stadium stadium = new Stadium();
		Screen screen = new Screen();
		if (stadiumId != null) {
			stadium = stadiumRepository.getOne(stadiumId);
			show.setStadium(stadium);
		}
		if (screenId != null) {
			screen = screenRepository.getOne(screenId);
			show.setScreen(screen);
		}
		showrepository.saveAndFlush(show);
		return show;
	}

	@Override
	public Show removeShow(int showid) {
		Show s = showrepository.findById(showid).get();
		showrepository.delete(s);
		return s;
	}

	@Override
	public Show viewShow(int showid) {
		return showrepository.findById(showid).get();
	}

	@Override
	public List<Show> viewAllShows() {
		return showrepository.findAll();
	}

	@Override
	public List<Show> viewShowList(int stadiumid) {
		return showrepository.getAllByStadiumId(stadiumid);
		// return null;
	}

	@Override
	public List<Show> viewShowList(LocalDate date) {
		List<Show> shList = new ArrayList<>();
		for (Show show : showrepository.findAll()) {
			if (show.getShowDate() != null && show.getShowDate().isEqual(date)) {
				shList.add(show);
			}
		}
		return shList;
	}

}
