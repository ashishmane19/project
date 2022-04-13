package com.app.service;

import java.time.LocalDate;
import java.util.List;

import com.app.exception.BookingNotFoundException;
import com.app.exception.ScreenNotFoundException;
import com.app.pojo.Booking;
import com.app.pojo.Screen;

public interface IBookingService {
	public Booking addBooking(Booking booking, Integer customerId,Integer showId) throws BookingNotFoundException;

	public List<Booking> viewBookingList() throws BookingNotFoundException;

	public Booking updateBooking(Booking booking) throws BookingNotFoundException;

	public Booking cancelBooking(int bookingid) throws BookingNotFoundException;

	public List<Booking> showAllBookings(int matchid) throws BookingNotFoundException;
	public Booking viewBooking(int bookingid) throws BookingNotFoundException;
	public List<Booking> showAllBookings(LocalDate bookingdate) throws BookingNotFoundException;

	public double calculateTotalCost(int bookingid);

}
