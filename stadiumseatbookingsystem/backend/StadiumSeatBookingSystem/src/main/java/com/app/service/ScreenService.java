package com.app.service;

import java.util.List;

import com.app.exception.ScreenNotFoundException;
import com.app.pojo.Screen;
import com.app.pojo.Stadium;

/**
 * 
 * @category Screen Service
 *
 */
public interface ScreenService {
	public Screen addScreen(Screen screen, Integer stadiumId) throws ScreenNotFoundException;
	public List<Screen> viewScreenList() throws ScreenNotFoundException;
	public Screen updateScreen(Screen s, Integer stadiumId);
	public Screen viewScreen(int screenId) throws ScreenNotFoundException;
	public Stadium getStadium(int screenId) throws ScreenNotFoundException;
}
