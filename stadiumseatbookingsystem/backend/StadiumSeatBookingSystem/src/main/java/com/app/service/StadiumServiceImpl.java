package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.exception.StadiumNotFoundException;
import com.app.pojo.Match;
import com.app.pojo.Show;
import com.app.pojo.Stadium;
import com.app.repository.MatchsRepository;
import com.app.repository.ScreenRepository;
import com.app.repository.StadiumRepository;

@Service
public class StadiumServiceImpl implements StadiumService {

	@Autowired
	private StadiumRepository stadiumrepository;
	@Autowired
	ScreenRepository screenRepository;
	@Autowired
	private MatchsRepository matchsrepository;

	@Override
	public List<Stadium> getAllStadiums() throws StadiumNotFoundException {
		List<Stadium> the = stadiumrepository.findAll();
		//if (the.size() == 0) throw new StadiumNotFoundException("No stadiums found");
		return the;
	}

	@Override
	public Stadium findStadiums(int stadiumId) {
		// TODO Auto-generated method stub
		if (stadiumrepository.findById(stadiumId).isPresent()) {
			return stadiumrepository.findById(stadiumId).get();
		} else
			return null;
	}

	@Override
	public Stadium addStadium(Stadium m) throws StadiumNotFoundException {
		if (m != null) {
			if (stadiumrepository.existsById(m.getStadiumId())) {
				throw new StadiumNotFoundException("Stadium already exists");
			} else {
				stadiumrepository.saveAndFlush(m);
			}
		}
		return m;
	}

	@Override
	public List<Stadium> updateStadium(Stadium m) {
		// TODO Auto-generated method stub
		stadiumrepository.saveAndFlush(m);
		return stadiumrepository.findAll();
	}

	@Override
	public List<Stadium> deleteStadiumById(int stadiumId) {
		// TODO Auto-generated method stub
		stadiumrepository.deleteById(stadiumId);
		return stadiumrepository.findAll();
	}

	@Override
	public List<Stadium> findStadiumsByMatch(Integer matchId) throws StadiumNotFoundException {
		List<Stadium> stadiumList=new ArrayList<>();
		Match match=matchsrepository.findById(matchId).get();
		Integer showwID=match.getShow().getShowId();
		List<Stadium> stadiums = stadiumrepository.findAll();
		for(Stadium stadium:stadiums) {
			List<Show> shows =stadium.getShow();
			for(Show show:shows){
				if(show.getShowId()==showwID) {
					stadiumList.add(stadium);
				}
			}
		}
		return stadiumList;
	}

	/*
	 * @Override public Stadium addStadium(Stadium t, List<Integer> screens) { //
	 * TODO Auto-generated method stub
	 * //if(stadiumrepository.existsById(m.getStadiumId())) throws new Stadium
	 * List<Screen> preScs=new ArrayList<>(); if(screens!=null) { for(int id:
	 * screens) { Screen sc=screenRepository.getOne(id); preScs.add(sc);
	 * screenRepository.saveAndFlush(sc); } } t.setScreens(preScs);
	 * stadiumrepository.saveAndFlush(t); return t; }
	 * 
	 * @Override public List<Stadium> updateStadium(Stadium t, List<Integer>
	 * screenIds) { // TODO Auto-generated method stub return null; }
	 */

}
