package com.app.exception;

public class MatchNotFoundException extends Exception {

	private static final long serialVersionUID = 1L;

	public MatchNotFoundException() {

	}

	public MatchNotFoundException(String message) {
		super(message);
	}
}
