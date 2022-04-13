package com.app.controller;

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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.exception.AccessForbiddenException;
import com.app.exception.CustomerNotFoundException;
import com.app.exception.UserCreationError;
import com.app.exception.UserNotFoundException;
import com.app.pojo.Customer;
import com.app.pojo.User;
import com.app.repository.CustomerRepository;
import com.app.service.IUserService;

/**
 * 
 * @category Login
 *
 */

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserController {

	Logger logger = LoggerFactory.getLogger(UserController.class);
	@Autowired
	IUserService userService;
	@Autowired
	CustomerRepository customerRepository;

	/**
	 * 
	 * @param user
	 * @return user
	 * @throws AccessForbiddenException
	 * @throws CustomerNotFoundException
	 * @throws UserCreationError
	 */
	@PostMapping("/adduser")
	public User addUser(@RequestBody User user)
			throws AccessForbiddenException, CustomerNotFoundException, UserCreationError {
		// if(!logCon.loginStatus() & logCon.getRole().equalsIgnoreCase("ADMIN"))
		/*
		 * if (user.getRole().equalsIgnoreCase("ADMIN") &
		 * !loginController.loginStatus()) throw new
		 * AccessForbiddenException("You must be Admin to access this..."); else
		 */
		if (user.getRole().equalsIgnoreCase("CUSTOMER")) {
			Customer customer = new Customer(user.getUsername(), null, null, null, user.getPassword());
			logger.info("-----------------Customer Added---------------------");
			customerRepository.saveAndFlush(customer);
			user.setCustomer(customer);
		}
		logger.info("-----------------User Added---------------------");
		return userService.addUser(user);
	}
	
	@GetMapping("/{username}/{password}")
	public ResponseEntity<User> getUserByUserNameAndPassword(@PathVariable String username, @PathVariable String password) throws UserNotFoundException {
//		ResponseEntity<User> response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		try {
//			User u = userService.findByUserNameAndPassword( username ,password);
//			if(u!=null) {
//			response = new ResponseEntity<>(u, HttpStatus.OK);
//			
//			logger.info("-------User with username  " + username +  " password: "+password +" Found---------");
//			return response;
//			}
//			
//		} catch (Exception e) {
//			response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
//			throw new UserNotFoundException("User with username: " + username + " password: "+password +" dosen't exist");
//		}
		
		ResponseEntity<User> response = null;
		User u = userService.findByUserNameAndPassword( username ,password);
		
		if(u==null) throw new UserNotFoundException("User with username: " + username + " and password: "+password +" dosen't exist");
		
		response = new ResponseEntity<>(u, HttpStatus.OK);
		
		logger.info("-------User with username:  " + username +  " password: "+password +" Found---------");
		return response;
		
		
	}
	

	/**
	 * 
	 * @param user
	 * @return remove user
	 * @throws AccessForbiddenException
	 */
	@DeleteMapping("/removeuser")
	public User removeUser(@RequestBody User user) throws AccessForbiddenException {
		/*
		 * if (!loginController.loginStatus()) throw new
		 * AccessForbiddenException("Not Logged In/Invalid Loggin"); if
		 * (!loginController.getRole().equalsIgnoreCase("ADMIN")) throw new
		 * AccessForbiddenException("You must be Admin to access this...");
		 */
		logger.info("--------------------User Deleted------------------");
		return userService.removeUser(user);
	}
}