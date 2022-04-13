package com.app.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojo.Match;

@Repository
public interface MatchsRepository extends JpaRepository<Match, Integer> {
	// @Query("select m from Match m join m.show s where s.stadium.stadiumId = :id")
	// List<Match> getAllByStadiumId(@Param("id") int id);

	List<Match> getAllBymatchDate(LocalDate date);

}
