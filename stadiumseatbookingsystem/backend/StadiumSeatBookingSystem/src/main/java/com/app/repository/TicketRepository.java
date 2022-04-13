package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Integer> {

}
