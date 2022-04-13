package com.app.controller;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.exception.MatchNotFoundException;
import com.app.pojo.Match;
import com.app.service.MatchsService;

/**
 * Match Controller Administrator can Create,Read,Update,Delete Match Records
 * and can also find Matchs based on Date and Theater.
 * 
 *
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/matchs")
public class MatchsController {

	Logger logger = LoggerFactory.getLogger(MatchsController.class);
	@Autowired
	private MatchsService matchsService;

	/**
	 * Stores a Match object in the Database.
	 * 
	 * @param match
	 * @return Match
	 * @throws MatchNotFoundException
	 * @throws IOException 
	 * @throws AccessForbiddenException
	 */
	@PostMapping("/add")
	public ResponseEntity<Match> addMatch(@RequestBody Match match)
			throws MatchNotFoundException, IOException {
		match = matchsService.addMatch(match);
		logger.info("-------Match Added Successfully---------");
		return new ResponseEntity<>(match, HttpStatus.CREATED);
	}

	/**
	 * Updates a existing Match record in the database.
	 * 
	 * @param match
	 * @return Match
	 * @throws MatchNotFoundException
	 * @throws AccessForbiddenException
	 */
	@PutMapping("/update")
	public ResponseEntity<Match> updateMatch(@RequestBody Match match)
			throws MatchNotFoundException {

		ResponseEntity<Match> response = null;
		if (match == null) {
			response = new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} else {
			match = matchsService.updateMatch(match);
			response = new ResponseEntity<>(match, HttpStatus.OK);
			logger.info("-------Match Updated Successfully---------");
		}
		return response;
	}
	
	@PutMapping("/map/{showId}")
	public ResponseEntity<Match> addToShow(@RequestBody Match match,@PathVariable Integer showId)
			throws MatchNotFoundException {

		ResponseEntity<Match> response = null;
		if (match == null) {
			response = new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} else {
			match = matchsService.addMatchToShow(match,showId);
			response = new ResponseEntity<>(match, HttpStatus.OK);
			logger.info("-------Match Updated Successfully---------");
		}
		return response;
	}

	
	
	
	/**
	 * Return's the List of Matchs from the Database
	 * 
	 * @return List<Match>
	 * @throws MatchNotFoundException
	 * @throws AccessForbiddenException
	 */
	@GetMapping("/findall")
	public ResponseEntity<List<Match>> viewMatchList() throws MatchNotFoundException {

		logger.info("-------Match List Fetched---------");
		return ResponseEntity.ok(matchsService.viewMatchList());
	}

	/**
	 * Returns the record from the database using identifier - matchId
	 * 
	 * @param matchId
	 * @return Match
	 * @throws MatchNotFoundException
	 * @throws AccessForbiddenException
	 */
	@GetMapping("/viewMatch/{matchId}")
	public ResponseEntity<Match> viewMatch(@PathVariable int matchId)
			throws MatchNotFoundException {

		ResponseEntity<Match> response = null;
		try {
			Match match = matchsService.viewMatch(matchId);
			response = new ResponseEntity<>(match, HttpStatus.OK);
			logger.info("-------Match With Match id " + matchId + " Found---------");
		} catch (Exception e) {
			response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
			throw new MatchNotFoundException("Match with " + matchId + " id dosen't exist");
		}
		return response;
		// return ResponseEntity.ok(matchsService.viewMatch(matchId));
	}

	/**
	 * Removes persisted Match instance from the Database.
	 * 
	 * @param matchId
	 * @return Match
	 * @throws MatchNotFoundException
	 * @throws AccessForbiddenException
	 */
	@DeleteMapping("/delete/{matchId}")
	public ResponseEntity<Match> removeMatch(@PathVariable int matchId)
			throws MatchNotFoundException {

		ResponseEntity<Match> response = null;
		Match match = matchsService.viewMatch(matchId);
		if (match == null) {
			response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			matchsService.removeMatch(matchId);
			response = new ResponseEntity<>(match, HttpStatus.OK);
			logger.info("-------Match With Match id " + matchId + " Deleted---------");
		}
		return response;
	}

	/**
	 * Displays List of matches based on the StadiumId.
	 * 
	 * @param stadiumId
	 * @return Match
	 * @throws AccessForbiddenException
	 */
	@GetMapping("/byStadium/{stadiumId}")
	public List<Match> viewMatchByStadiumId(@PathVariable int stadiumId)  {
		logger.info("-------Matchs With StadiumId " + stadiumId + " Found---------");
		return matchsService.viewMatchList(stadiumId);
	}

	/**
	 * Returns the list of Matchs based on the Date.
	 * 
	 * @param date
	 * @return Match
	 * @throws AccessForbiddenException
	 */
	@GetMapping("/byDate/{date}")
	public List<Match> viewMatchByLocalDate(
			@RequestParam("matchDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
		logger.info("-------Matchs With Date " + date + " Found---------");
		return matchsService.viewMatchList(date);
	}

}
