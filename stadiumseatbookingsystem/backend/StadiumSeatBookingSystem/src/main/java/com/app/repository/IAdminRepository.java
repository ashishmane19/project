package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.User;

public interface IAdminRepository extends JpaRepository<User, Integer> {
	

}