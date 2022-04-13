package com.app.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.exception.MatchNotFoundException;
import com.app.pojo.Match;

public interface MatchsService {

	public Match addMatch(Match match) throws MatchNotFoundException;

	public Match removeMatch(int matchid) throws MatchNotFoundException;
	
	public Match updateMatch(Match match) throws MatchNotFoundException;
	
	public Match addMatchToShow(Match match, Integer showId) throws MatchNotFoundException;

	public Match viewMatch(int matchid) throws MatchNotFoundException;

	public List<Match> viewMatchList() throws MatchNotFoundException;

	public List<Match> viewMatchList(int stadiumid);

	public List<Match> viewMatchList(LocalDate date);
}
