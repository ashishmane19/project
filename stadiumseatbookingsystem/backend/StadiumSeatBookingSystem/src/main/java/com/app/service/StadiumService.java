package com.app.service;

import com.app.exception.StadiumNotFoundException;
import com.app.pojo.Stadium;

import java.util.List;

public interface StadiumService {
	public List<Stadium> getAllStadiums() throws StadiumNotFoundException;

	public Stadium findStadiums(int stadiumId);

	public Stadium addStadium(Stadium t) throws StadiumNotFoundException;

	public List<Stadium> updateStadium(Stadium t);

	public List<Stadium> deleteStadiumById(int stadiumId);
	
	public List<Stadium> findStadiumsByMatch(Integer matchId) throws StadiumNotFoundException;
}
