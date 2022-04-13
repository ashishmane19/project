package com.app.service;

import java.util.Optional;

import com.app.exception.UserCreationError;
import com.app.pojo.User;

public interface IUserService {

	public User addUser(User user) throws UserCreationError;

	public User removeUser(User user);
	
	public User findByUserNameAndPassword(String username , String password);
}
