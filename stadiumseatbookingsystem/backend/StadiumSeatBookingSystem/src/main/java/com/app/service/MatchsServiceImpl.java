package com.app.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.exception.MatchNotFoundException;
import com.app.pojo.Match;
import com.app.pojo.Show;
import com.app.repoImpl.QueryClass;
import com.app.repository.MatchsRepository;
import com.app.repository.ShowRepository;
import com.app.repository.StadiumRepository;

import org.springframework.util.StringUtils;
import java.io.IOException;
import java.util.Base64;

@Service
public class MatchsServiceImpl implements MatchsService {

	@Autowired
	private MatchsRepository matchsrepository;
	@Autowired
	StadiumRepository stadiumRepository;
	@Autowired
	ShowRepository showrepository;
	@Autowired
	QueryClass query;

	@Override
	public Match addMatch(Match match) throws MatchNotFoundException {
		if (match != null) {
			if (matchsrepository.existsById(match.getMatchId())) {
				throw new MatchNotFoundException("Match with this id already exists");
			} else {
				/*
				String fileName = StringUtils.cleanPath(file.getOriginalFilename());
				if(fileName.contains(".."))
				{
					System.out.println("not a a valid file");
				}
				try {
					match.setMatchImage(Base64.getEncoder().encodeToString(file.getBytes()));
				} catch (IOException e) {
					e.printStackTrace();
				}*/
				matchsrepository.saveAndFlush(match);
			}
		}
		return match;
	}

	@Override
	public Match removeMatch(int matchid) {
		Match m = matchsrepository.findById(matchid).get();
		List<Show> shows = showrepository.findAll();
		for (Show show : shows) {
			if (show.getMatch()!=null && show.getMatch().getMatchId() == matchid) {
				show.setMatch(null);
			}
		}
		matchsrepository.delete(m);
		return m;
	}
	
	@Override
	public Match updateMatch(Match match) {
		matchsrepository.saveAndFlush(match);
		return matchsrepository.getOne(match.getMatchId());
	}
	
	@Override
	public Match addMatchToShow(Match match,Integer showId) {
		Show show=new Show();
		if (showId != null) {
			show = showrepository.getOne(showId);
			match.setShow(show);
		}
		matchsrepository.saveAndFlush(match);
		return matchsrepository.getOne(match.getMatchId());
	}

	@Override
	public Match viewMatch(int matchid) {
		return matchsrepository.findById(matchid).get();
	}

	@Override
	public List<Match> viewMatchList() throws MatchNotFoundException {
		List<Match> ml = matchsrepository.findAll();
		//if (ml.size() == 0) throw new MatchNotFoundException("Matchs dosen't exist");
		return ml;
	}

	@Override
	public List<Match> viewMatchList(int stadiumid) {
		List<Match> matchs = new ArrayList<>();
		List<Show> shows = showrepository.findAll();
		Set<Integer> showIds = new HashSet<>();
		for (Show s : shows) {
			if (s.getStadium().getStadiumId() == stadiumid) {
				showIds.add(s.getShowId());
			}
		}
		for (Integer id : showIds) {
			matchs.add(showrepository.getOne(id).getMatch());
		}
		return matchs;
	}

	@Override
	public List<Match> viewMatchList(LocalDate date) {
		List<Match> mvList = new ArrayList<>();
		for (Match match : matchsrepository.findAll()) {
			if (match.getMatchDate() != null && match.getMatchDate().isEqual(date)) {
				mvList.add(match);
			}
		}
		return mvList;
	}


}
