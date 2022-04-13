package com.app.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.web.bind.annotation.RestController;

import com.app.exception.StadiumNotFoundException;
import com.app.pojo.Match;
import com.app.pojo.Stadium;
import com.app.service.StadiumService;

/**
 * 
 *
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/stadium")
public class StadiumController {
	Logger logger = LoggerFactory.getLogger(StadiumController.class);
	@Autowired
	private StadiumService stadiumservice;


	/**
	 * 
	 * @return listOfStadiums
	 * @throws AccessForbiddenException
	 * @throws StadiumNotFoundException
	 */
	@GetMapping("/all")
	public ResponseEntity<List<Stadium>> getAllstadiums() throws  StadiumNotFoundException {

		logger.info("-------Stadium List Fetched---------");
		return ResponseEntity.ok(stadiumservice.getAllStadiums());
	}

	/**
	 * 
	 * @param t
	 * @return inserted stadium
	 * @throws AccessForbiddenException
	 * @throws StadiumNotFoundException
	 */
	@PostMapping("/insert")
	public ResponseEntity<Stadium> addStadium(@RequestBody Stadium t)
			throws StadiumNotFoundException {

		logger.info("-------Stadium Added Successfully---------");
		return new ResponseEntity<>(stadiumservice.addStadium(t), HttpStatus.CREATED);
	}

	/**
	 * 
	 * @param t
	 * @return updated stadium
	 * @throws AccessForbiddenException
	 * @throws StadiumNotFoundException
	 */
	@PutMapping("/update")
	public List<Stadium> updateStadium(@RequestBody Stadium t)
			throws  StadiumNotFoundException {

		logger.info("-------Stadium Updated Successfully---------");
		return stadiumservice.updateStadium(t);
	}

	/**
	 * 
	 * @param stadiumId
	 * @return stadium by stadiumId
	 * @throws AccessForbiddenException
	 * @throws StadiumNotFoundException
	 */
	@GetMapping("/find/{stadiumId}")
	public ResponseEntity<Stadium> findStadium(@PathVariable int stadiumId)
			throws  StadiumNotFoundException {

		logger.info("-------Stadium Found with Stadium id" + stadiumId + "---------");
		return ResponseEntity.ok(stadiumservice.findStadiums(stadiumId));
	}

	/**
	 * 
	 * @param stadiumId
	 * @return deleted stadium
	 * @throws AccessForbiddenException
	 * @throws StadiumNotFoundException
	 */
	@DeleteMapping("/delete/{stadiumId}")
	public List<Stadium> deleteMatchsById(@PathVariable int stadiumId)
			throws StadiumNotFoundException {

		logger.info("-------Stadium Deleted with Stadium id" + stadiumId + "---------");
		return stadiumservice.deleteStadiumById(stadiumId);
	}
	
	@GetMapping("/findbyMatch/{matchId}")
	public ResponseEntity<List<Stadium>> findStadiumByMatchId(@PathVariable int matchId)
			throws  StadiumNotFoundException {
		logger.info("-------Stadium Found with Match id " + matchId + "---------");
		return ResponseEntity.ok(stadiumservice.findStadiumsByMatch(matchId));
	}
	
}
