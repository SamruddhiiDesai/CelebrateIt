package com.celebrateit.pojo;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name="users")
public class Users extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="user_id")
	private Integer userid;
	
	@Column(name="full_name",length = 20)
	private String fullName;
	
	
	@Column(length = 25,unique = true)//unique constraint will be added
	private String email;
	
	@Column(length = 20,nullable = false)//NOT NULL 
	private String password;
//	@Transient //skip col generation
//	private String confirmPassword;
	
	 @Column(name = "mobile", length = 15, nullable = false, unique = true)
	 private String mobile;
	

	
	@Enumerated(EnumType.STRING)
	@Column(name="role",length = 20)//varchar(20)
	private UserRole role;
	
	
	
}
