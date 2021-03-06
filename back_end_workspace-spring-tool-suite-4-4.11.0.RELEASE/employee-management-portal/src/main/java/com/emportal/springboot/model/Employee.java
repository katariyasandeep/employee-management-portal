package com.emportal.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "first_name")
	private String firstName;
	
	@Column(name = "last_name")
	private String lastName;
	
	@Column(name = "address_")
	private String address;
	
	@Column(name = "team_")
	private String team;
	
//	@Column(name="salary_")
//	private long salary;
	
	public Employee() {
		
	}
	public Employee(String firstName, String lastName, String address, String team, long salary) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.team = team;
//		this.salary = salary;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getTeam() {
		return team;
	}
	public void setTeam(String team) {
		this.team = team;
	}
//	public void setSalary(long salary) {
//		this.salary = salary;
//	}
//	public long getSalary() {
//		return salary;
//	}
	
	
	
}
