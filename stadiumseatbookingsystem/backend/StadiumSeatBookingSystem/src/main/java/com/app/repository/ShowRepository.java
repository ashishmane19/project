package com.app.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojo.Show;

public interface ShowRepository extends JpaRepository<Show, Integer> {
	@Query("select s from Show s where s.stadium.stadiumId = :id")
	List<Show> getAllByStadiumId(@Param("id") int id);
}
