package com.app.service;

import org.springframework.stereotype.Service;

//import java.util.List;
//import java.util.Set;


@Service
public interface IAdminService {

	public void registerAdmin(String username, String password) throws Exception;
}