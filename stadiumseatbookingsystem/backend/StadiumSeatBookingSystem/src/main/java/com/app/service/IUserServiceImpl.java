package com.app.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.exception.UserCreationError;
import com.app.pojo.User;
import com.app.repoImpl.QueryClass;
import com.app.repository.UserRepository;
import com.app.validator.InputValidator;

@Service
public class IUserServiceImpl implements IUserService {
	

	@Autowired
	UserRepository userrepo;

	@Autowired
	InputValidator validate;

	@Autowired
	QueryClass qcp;

	@Override
	public User addUser(User user) throws UserCreationError {
		if (!validate.usernameValidator(user.getUsername()))
			throw new UserCreationError("Check Username !!!!");
		if (!validate.passwordValidator(user.getPassword()))
			throw new UserCreationError("Cannot register this User with this password");
		return userrepo.saveAndFlush(user);
	}

	@Override
	public User removeUser(User user) {
		userrepo.delete(user);
		return user;
	}
	
	@Override
	public User findByUserNameAndPassword(String username , String password) {
		// TODO Auto-generated method stub
		return userrepo.findByUserNameAndPassword(username, password);
	}

}
