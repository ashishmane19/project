package com.app.repoImpl;

import java.util.List;
import javax.persistence.*;
import org.springframework.stereotype.Repository;

import com.app.exception.UserNotFoundException;
import com.app.pojo.Booking;
import com.app.pojo.User;

@Repository
public class QueryClass {
	@PersistenceContext
	EntityManager eManager;

	public List<Booking> getAllByMatchId(int matchId) {
		TypedQuery<Booking> qry = eManager
				.createQuery("select b from Booking b join b.show s where s.match.matchId = :id", Booking.class);
		qry.setParameter("id", matchId);
		return qry.getResultList();
	}

	public User findByUserName(String username) throws UserNotFoundException {
		TypedQuery<User> qry = eManager.createQuery("select u from User u where u.username like :name", User.class);
		qry.setParameter("name", username);
		List<User> user = qry.getResultList();
		if (user.size() == 0)
			throw new UserNotFoundException("User Not Available !!");
		return user.get(0);
	}

}
