package com.coach.springdemo;

public class SwimCoach implements Coach{
	
	@Override
	public String getDailyWorkout() {
		return "Give me 20 laps!";
	}

}
