package com.app.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.exception.ScreenNotFoundException;
import com.app.pojo.Screen;
import com.app.pojo.Stadium;
import com.app.repository.ScreenRepository;
import com.app.repository.StadiumRepository;

/**
 * 
 * @category Screen Service Implementation
 */
@Service
public class ScreenServiceImpl implements ScreenService {

	@Autowired
	private ScreenRepository screenRepository;
	@Autowired
	private StadiumRepository stadiumRepository;

	/**
	 * @return screenList
	 */
	@Override
	public List<Screen> viewScreenList() throws ScreenNotFoundException {
		List<Screen> screen = screenRepository.findAll();
		if (screen.size() == 0)
			throw new ScreenNotFoundException("No screens found");
		return screen;
	}

	/**
	 * @return screen
	 */
	@Override
	public Screen addScreen(Screen screen, Integer stadiumId) throws ScreenNotFoundException {
		Stadium stadium = new Stadium();
		if (stadiumId != null) {
			if (screenRepository.existsById(screen.getScreenId())) {
				throw new ScreenNotFoundException("Screen already exists");
			} else {
				stadium = stadiumRepository.getOne(stadiumId);
				screen.setStadium(stadium);
			}
			screenRepository.saveAndFlush(screen);
		}
		return screen;
	}
	@Override
	public Screen viewScreen(int screenId) throws ScreenNotFoundException {
		return screenRepository.findById(screenId).get();
		}
	/**
	 * @return updatedScreen
	 */
	@Override
	public Screen updateScreen(Screen screen, Integer stadiumId) {
		Stadium stadium = new Stadium();
		if (stadiumId != null) {
			stadium = stadiumRepository.getOne(stadiumId);
			screen.setStadium(stadium);
		}
		screenRepository.saveAndFlush(screen);
		return screen;
	}

	@Override
	public Stadium getStadium(int screenId) throws ScreenNotFoundException {
		Screen screen =screenRepository.findById(screenId).get();
		Stadium stadium=screen.getStadium();
		return stadium;
	}

}
