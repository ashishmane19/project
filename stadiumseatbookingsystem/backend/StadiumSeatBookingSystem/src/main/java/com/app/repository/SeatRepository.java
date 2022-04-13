package com.app.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojo.Seat;
import com.app.pojo.SeatStatus;

@Repository
public interface SeatRepository extends JpaRepository<Seat, Integer> {

	
	@Query("select s  from Seat s where s.status='AVAILABLE'")
	List<Seat> findAvailableSeats();
}
