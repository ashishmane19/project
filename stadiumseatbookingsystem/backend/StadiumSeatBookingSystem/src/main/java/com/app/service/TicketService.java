package com.app.service;

import java.util.List;

import com.app.exception.TicketNotFoundException;
import com.app.pojo.Ticket;

public interface TicketService {
	public Ticket addTicket(Ticket ticket,Integer bookingId) throws TicketNotFoundException;

	public Ticket findTicket(int ticketId);

	List<Ticket> viewTicketList() throws TicketNotFoundException;

}
