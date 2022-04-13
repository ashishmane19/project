package com.app.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.exception.ScreenNotFoundException;
import com.app.pojo.Screen;
import com.app.pojo.Stadium;
import com.app.service.ScreenService;

/**
 * 
 * @category ScreenController
 *
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/screens")
public class ScreenController {

	Logger logger = LoggerFactory.getLogger(ScreenController.class);

	@Autowired
	private ScreenService screenService;

	/**
	 * 
	 * @param screen
	 * @param stadiumId
	 * @return addedScreen
	 * @throws AccessForbiddenException
	 * @throws ScreenNotFoundException
	 */
	@PostMapping("/add/{stadiumId}")
	public ResponseEntity<Screen> addAScreen(@RequestBody Screen screen,
			@PathVariable Integer stadiumId)
			throws ScreenNotFoundException {

		logger.info("-------Screen Successfully added into Stadium " + stadiumId + "---------");
		return ResponseEntity.ok(screenService.addScreen(screen, stadiumId));
	}

	/**
	 * 
	 * @return screenList
	 * @throws AccessForbiddenException
	 * @throws ScreenNotFoundException
	 */
	@GetMapping("/findall")
	public ResponseEntity<List<Screen>> viewScreenList() throws  ScreenNotFoundException {

		logger.info("-------List Of Screens Fetched Successfully---------");
		return ResponseEntity.ok(screenService.viewScreenList());
	}
	
	@GetMapping("/stadium/{screenId}")
	public ResponseEntity<Stadium>  getStadiumById(@PathVariable int screenId) throws ScreenNotFoundException {
		ResponseEntity<Stadium> response = null;
		try {
			Stadium stadium = screenService.getStadium(screenId);
			response = new ResponseEntity<>(stadium, HttpStatus.OK);
		} catch (Exception e) {
			response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return response;
	}
	
	@GetMapping("/viewScreen/{screenId}")
	public ResponseEntity<Screen> viewScreen(@PathVariable int screenId)
			throws ScreenNotFoundException {
		ResponseEntity<Screen> response = null;
		try {
			Screen screen = screenService.viewScreen(screenId);
			response = new ResponseEntity<>(screen, HttpStatus.OK);
			logger.info("-------Screen Found---------");
		} catch (Exception e) {
			response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
			throw new ScreenNotFoundException("Screen dosen't exist");
		}
		return response;
	}
	/**
	 * 
	 * @param s
	 * @param stadiumId
	 * @return updatedScreen details
	 * @throws AccessForbiddenException
	 * @throws ScreenNotFoundException
	 */
	@PutMapping("/update")
	public ResponseEntity<Screen> updateScreen(@RequestBody Screen s, @RequestParam(required = false) Integer stadiumId)
			throws  ScreenNotFoundException {

		ResponseEntity<Screen> response = null;
		if (s == null) {
			response = new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} else {
			s = screenService.updateScreen(s, stadiumId);
			response = new ResponseEntity<>(s, HttpStatus.OK);
			logger.info("-------Sceen Updated Successfully---------");
		}
		return response;
	}
}
