package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojo.User;

public interface UserRepository extends JpaRepository<User, Integer> {
//	User findByUserName(String username) ;
	
	@Query("select u  from User u where u.username=?1 and u.password=?2")
	User findByUserNameAndPassword(String username, String password);
}
